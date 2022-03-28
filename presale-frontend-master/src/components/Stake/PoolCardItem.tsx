import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'

import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
  Avatar,
  Box,
  Tooltip,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

//Component
import TextField from './TextField'

import { Pool } from 'state/types'
import { getAddress } from 'utils/addressHelpers'
import { useERC20 } from 'hooks/useContract'
import { getBalanceAmount } from 'utils/formatBalance'
import { BIG_ZERO } from 'utils/bigNumber'
import { getFullDisplayBalance } from 'utils/formatBalance'

import { PoolCategory } from 'config/constants/types'
import { useApprovePool } from './hooks/pool/useApprovePool'
import useStakePool from './hooks/pool/useStakePool'
import useUnstakePool from './hooks/pool/useUnstakePool'
import useHarvestPool from './hooks/pool/useHavestPool'
import useGetWithdrawDate from './hooks/pool/useGetWithdrawDate'

import XBXTokenImg from '../../assets/images/XBX.png'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  cardstyle: {
    borderRadius: '15px !important',
    position: 'static',
    border: theme.palette.type === 'dark' ? '1px solid #4A4A4A' : '1px solid #E2E2E2',
    backgroundColor: theme.palette.type === 'dark' ? '#1E1F22' : 'white',
  },
  cardtitle: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',
    marginBottom: theme.spacing(2),
  },
  heading: {
    fontWeight: 600,
    color: theme.palette.type === 'dark' ? 'white' : 'black',
  },
  balanceEarnAmount: {
    fontWeight: 600,
    color: theme.palette.type === 'dark' ? '#31C77E' : 'black',
  },
  claimButton: {
    width: '100%',
    backgroundImage: 'linear-gradient(to right, #58e4b9 , #fec712)',
    height: '50px',
    borderRadius: '7px',
    textTransform: 'none',
  },
  subtitle: {
    color: 'grey',
    marginBottom: theme.spacing(1),
    wordWrap: 'break-word',
  },
  totalrewardtitle: {
    color: 'grey',
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
  totalvalue: {
    color: '#31c77e',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    wordBreak: 'break-word',
    fontSize: '2rem',
  },
  dashBoardCard: {
    alignItems: 'center',
    padding: theme.spacing(3),
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.type === 'dark' ? 'black' : '#F5F6F6',
  },
  expandMoreIcon: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',
  },
}))

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffb74d',
      main: '#FF7511',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd453',
      main: '#FFC711',
      dark: '#b28d1c',
      contrastText: '#fff',
    },
  },
})

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const StyledAccordionSummary = styled(AccordionSummary)({
  margin: '8px 0',
})

const StyledAvatar = styled(Avatar)({
  width: theme.spacing(8),
  height: theme.spacing(8),
  marginRight: '12px',
})

const StyledButton = styled(Button)({
  margin: theme.spacing(1),
  width: '135px',
  borderRadius: '10px',
  fontWeight: 600,
  fontSize: '16px',
})

const CustomButton = styled(Button)<{ disabled: boolean; width: number }>`
  width: ${({ width }) => `${width}%`};
  height: 50px;
  background: ${({ disabled }) => (disabled ? '#D7D8D8 !important' : 'linear-gradient(to right, #57e3b9 , #25bd91)')};
  color: #ffffff;
  border-radius: 7px;
  text-transform: none;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
`

const PoolCardItem: React.FC<{ pool: Pool; account: string }> = ({ pool, account }) => {
  const classes = useStyles()
  const [openAlert, setOpenAlert] = React.useState(false)
  const [rewardMsg, setRewardMsg] = React.useState('')

  const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenAlert(false)
  }

  const {
    allowance: allowanceAsString = 0,
    stakingTokenBalance: tokenBalanceAsString = 0,
    stakedBalance: stakedBalanceAsString = 0,
    pendingReward: earningsAsString = 0,
  } = pool.userData || {}

  const stakedBalance = new BigNumber(stakedBalanceAsString)
  const maxstakedBalance = stakedBalance

  const stakingTokenBalance = new BigNumber(tokenBalanceAsString)
  const maxTokenBalance = stakingTokenBalance

  const allowance = new BigNumber(allowanceAsString)
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const { sousId, stakingToken, earningToken, poolCategory } = pool
  const isBnbPool = poolCategory === PoolCategory.BINANCE

  // Approve
  const stakingTokenContract = useERC20(stakingToken.address ? getAddress(stakingToken.address) : '')
  const { handleApprove, requestedApproval } = useApprovePool(stakingTokenContract, sousId, earningToken.symbol)

  // stake
  const { onStake } = useStakePool(sousId, isBnbPool)
  const { onUnstake } = useUnstakePool(sousId, pool.enableEmergencyWithdraw)

  const [requestedDeposit, setRequestedDeposit] = useState(false)
  const [requestedWithdraw, setRequestedWithdraw] = useState(false)

  const [depositVal, setDepositVal] = useState('0')
  const [withdrawVal, setwithdrawVal] = useState('0')
  const depositValNumber = new BigNumber(depositVal)
  const withdrawValNumber = new BigNumber(withdrawVal)

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(maxTokenBalance)
  }, [maxTokenBalance])
  const fullBalanceNumber = new BigNumber(fullBalance)

  const fullStaked = useMemo(() => {
    return getFullDisplayBalance(maxstakedBalance)
  }, [maxstakedBalance])
  const fullStakedNumber = new BigNumber(fullStaked)

  const { onStakeDate, onWithdrawDate } = useGetWithdrawDate(sousId)

  const handleStake = async (amount: string) => {
    try {
      await onStake(amount, stakingToken.decimals)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeposit = async () => {
    setRequestedDeposit(true)

    try {
      var stakeLockDate = await onStakeDate()
      var stakeTimestamp = stakeLockDate.toNumber() + 3 * 60

      var currentTimeInSeconds = Math.floor(Date.now() / 1000)

      if (currentTimeInSeconds < stakeTimestamp) {
        await handleStake(depositVal)
      } else {
        let date = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }).format(stakeTimestamp * 1000)

        setOpenAlert(true)
        setRewardMsg('you can not stake now, staking was finished at ' + date)
      }
    } catch (err) {
      console.log(err)
    }

    setRequestedDeposit(false)
  }

  const handleUnstake = async (amount: string) => {
    try {
      await onUnstake(amount, stakingToken.decimals)
    } catch (err) {
      console.log(err)
    }
  }

  const handleWithdraw = async () => {
    setRequestedWithdraw(true)

    try {
      var withdrawDate = await onWithdrawDate()
      var withdrawTimestamp = withdrawDate.toNumber() + 3 * 60

      var currentTimeInSeconds = Math.floor(Date.now() / 1000)

      if (withdrawTimestamp < currentTimeInSeconds) {
        await handleUnstake(withdrawVal)
      } else {
        let date = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }).format(withdrawTimestamp * 1000)

        setOpenAlert(true)
        setRewardMsg('you can withdraw at ' + date)
      }
    } catch (err) {
      console.log(err)
    }

    setRequestedWithdraw(false)
  }

  // Harvest
  const earnings = new BigNumber(earningsAsString)
  const rawEarningsBalance = account ? getBalanceAmount(earnings) : BIG_ZERO
  const isCompoundPool = sousId === 0

  const images = {
    XBX: XBXTokenImg,
  }

  const [requestedHarvest, setRequestedHarvest] = useState(false)
  const { onReward } = useHarvestPool(sousId, isBnbPool)
  const fullEarningBalance = getFullDisplayBalance(earnings, earningToken.decimals)

  const handleClaim = async () => {
    setRequestedHarvest(true)
    if (isCompoundPool) {
      try {
        await onStake(fullEarningBalance, earningToken.decimals)
        setRequestedHarvest(false)
      } catch (e) {
        console.error(e)
        setRequestedHarvest(false)
      }
    } else {
      // harvesting
      try {
        await onReward()
        setRequestedHarvest(false)
        console.log('harvest success')
      } catch (e) {
        console.error(e)
        setRequestedHarvest(false)
        console.log('harvest error')
      }
    }

    setRequestedHarvest(false)
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.cardtitle}>
        Stake {pool.stakingToken.symbol} token to earn {pool.earningToken.symbol} rewards
      </Typography>
      <ThemeProvider theme={theme}>
        <Accordion className={classes.cardstyle}>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandMoreIcon} />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} width="100%">
              <Box
                display="flex"
                flexWrap="wrap"
                flexDirection={{ xs: 'column', sm: 'row' }}
                width={{ xs: '100%', lg: '50%' }}
                alignItems="center"
                mx={2}
              >
                <Box
                  width={{ xs: '100%', md: '50%' }}
                  display="flex"
                  alignItems="center"
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  {/* <StyledAvatar alt="Token image" src="/Images/stake/USDT.png" /> */}
                  <StyledAvatar alt={pool.stakingToken.symbol} src={images[pool.stakingToken.symbol]} />
                  <Typography variant="h6" className={classes.heading}>
                    {pool.stakingToken.symbol}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent={{
                    xs: 'center',
                    md: 'flex-end',
                  }}
                  width={{ xs: '80%', md: '45%' }}
                >
                  {/* <StyledButton variant="contained" size="medium" color="secondary">
                    APY 95%
                  </StyledButton> */}
                  <StyledButton variant="contained" size="medium" color="primary">
                    {`APR ${pool.apr ? pool.apr.toPrecision(4) : 0}%`}
                  </StyledButton>
                </Box>
                <Box
                  width={{ xs: '20%', md: '5%' }}
                  display="flex"
                  alignItems="center"
                  justifyContent={{ xs: 'center', md: 'flex-end' }}
                >
                  <Tooltip title="Information" placement="top">
                    <InfoOutlinedIcon
                      style={{
                        verticalAlign: 'middle',
                        color: '#9D9D9D',
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                textAlign={{ xs: 'center', md: 'left' }}
                flexDirection={{ xs: 'colomn', sm: 'row' }}
                alignItems="center"
                width={{ xs: '100%', lg: '50%' }}
                mx={2}
              >
                <Box width={{ xs: '100%', sm: '50%' }}>
                  <Typography variant="h6" className={classes.subtitle}>
                    Staked Balance:
                  </Typography>
                  <Typography variant="h6" className={classes.balanceEarnAmount}>
                    {getBalanceAmount(stakedBalance).toNumber()} {pool.stakingToken.symbol} Token
                  </Typography>
                </Box>
                <Box
                  width={{ xs: '100%', sm: '50%' }}
                  borderLeft={{ xs: 'none', sm: '2px solid lightgrey' }}
                  pl={{ xs: 0, sm: 2 }}
                  mt={{ xs: 1, sm: 0 }}
                >
                  <Typography variant="h6" className={classes.subtitle}>
                    {pool.earningToken.symbol} Earned:
                  </Typography>
                  <Typography variant="h6" className={classes.balanceEarnAmount}>
                    {rawEarningsBalance.toNumber()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledAccordionSummary>
          <AccordionDetails className={classes.dashBoardCard}>
            <Box width={{ xs: '100%', lg: '35%' }} alignSelf="center" px={1}>
              <Typography variant="h6" className={classes.subtitle}>
                Stake
              </Typography>
              <TextField value={depositVal} setValue={setDepositVal} maxValue={fullBalance} />
              <Box display="flex" justifyContent="space-between">
                <CustomButton
                  variant="contained"
                  size="medium"
                  width={48}
                  onClick={handleApprove}
                  disabled={!account || requestedApproval || isApproved}
                >
                  Approve
                </CustomButton>
                <CustomButton
                  variant="contained"
                  size="medium"
                  width={48}
                  onClick={handleDeposit}
                  disabled={
                    !isApproved ||
                    requestedDeposit ||
                    !depositValNumber.isFinite() ||
                    !depositValNumber.gt(0) ||
                    depositValNumber.gt(fullBalanceNumber)
                  }
                >
                  Deposit
                </CustomButton>
              </Box>
            </Box>
            <Box width={{ xs: '100%', lg: '35%' }} alignSelf="center" px={1}>
              <Typography variant="h6" className={classes.subtitle}>
                Unstake
              </Typography>
              <TextField value={withdrawVal} setValue={setwithdrawVal} maxValue={fullStaked} />
              <CustomButton
                variant="contained"
                size="medium"
                width={100}
                onClick={handleWithdraw}
                disabled={
                  !isApproved ||
                  requestedWithdraw ||
                  !stakedBalance.gt(0) ||
                  !withdrawValNumber.isFinite() ||
                  !withdrawValNumber.gt(0) ||
                  withdrawValNumber.gt(fullStakedNumber)
                }
              >
                Withdraw
              </CustomButton>
            </Box>
            <Box width={{ xs: '100%', lg: '30%' }} alignSelf="center" px={1}>
              <Typography variant="h6" className={classes.totalrewardtitle}>
                Total Banana Rewards:
              </Typography>
              <Typography className={classes.totalvalue} variant="h3" gutterBottom>
                {rawEarningsBalance.toNumber()}
              </Typography>
              <Button
                variant="contained"
                size="medium"
                className={classes.claimButton}
                onClick={handleClaim}
                disabled={rawEarningsBalance.eq(0) || requestedHarvest}
              >
                Claim
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          <Alert onClose={handleAlertClose} severity="warning">
            {rewardMsg}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  )
}

export default PoolCardItem
