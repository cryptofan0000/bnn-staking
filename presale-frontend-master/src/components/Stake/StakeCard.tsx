import React from 'react'
import BigNumber from 'bignumber.js'
import { Farm } from 'state/types'

import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
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

//Component
import TextField from './TextField'

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
  approveButton: {
    width: '48%',
    height: '50px',
    backgroundImage: 'linear-gradient(to right, #57e3b9 , #25bd91)',
    color: '#fff',
    borderRadius: '7px',
    textTransform: 'none',
  },
  depositButton: {
    width: '48%',
    float: 'right',
    height: '50px',
    borderRadius: '7px',
    textTransform: 'none',
    backgroundColor: '#E2E2E2 !important',
  },
  withdrawButton: {
    width: '100%',
    height: '50px',
    borderRadius: '7px',
    textTransform: 'none',
    backgroundColor: '#E2E2E2 !important',
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
  width: '110px',
  height: '40px',
  borderRadius: '10px',
  fontWeight: 600,
  fontSize: '16px',
})

interface cardInfoProps {
  id: number
  tokenImageUrl: string
  stakedToken: string
  earnToken: string
  apr: number
  apy: number
  earned: number
  stakedBalance: number
}

export interface FarmWithStakedValue extends Farm {
  apr?: number
  lpRewardsApr?: number
  liquidity?: BigNumber
}

const StakeCard: React.FC<{ cardinfo: cardInfoProps }> = ({ cardinfo }) => {
  const classes = useStyles()

  const sevValue = () => {
    console.log('setVal')
  }
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.cardtitle}>
        Stake {cardinfo.stakedToken} token to earn {cardinfo.earnToken} rewards
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
                  <StyledAvatar alt="Token image" src={cardinfo.tokenImageUrl} />
                  <Typography variant="h6" className={classes.heading}>
                    {cardinfo.stakedToken}
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
                  <StyledButton variant="contained" size="medium" color="secondary">
                    APY {cardinfo.apy}%
                  </StyledButton>
                  <StyledButton variant="contained" size="medium" color="primary">
                    APR {cardinfo.apr}%
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
                    {cardinfo.stakedBalance} {cardinfo.stakedToken} Token
                  </Typography>
                </Box>
                <Box
                  width={{ xs: '100%', sm: '50%' }}
                  borderLeft={{ xs: 'none', sm: '2px solid lightgrey' }}
                  pl={{ xs: 0, sm: 2 }}
                  mt={{ xs: 1, sm: 0 }}
                >
                  <Typography variant="h6" className={classes.subtitle}>
                    {cardinfo.earnToken} Earned:
                  </Typography>
                  <Typography variant="h6" className={classes.balanceEarnAmount}>
                    {cardinfo.earned}
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
              <TextField value="" setValue={sevValue} maxValue="0" />
              <Box>
                <Button variant="contained" size="medium" className={classes.approveButton}>
                  Approve
                </Button>
                <Button variant="contained" size="medium" color="primary" className={classes.depositButton} disabled>
                  Deposite
                </Button>
              </Box>
            </Box>
            <Box width={{ xs: '100%', lg: '35%' }} alignSelf="center" px={1}>
              <Typography variant="h6" className={classes.subtitle}>
                Unstake
              </Typography>
              <TextField value="" setValue={sevValue} maxValue="0" />
              <Button variant="contained" size="medium" className={classes.withdrawButton} color="primary" disabled>
                Withdraw
              </Button>
            </Box>
            <Box width={{ xs: '100%', lg: '30%' }} alignSelf="center" px={1}>
              <Typography variant="h6" className={classes.totalrewardtitle}>
                Total Banana Rewards:
              </Typography>
              <Typography className={classes.totalvalue} variant="h3" gutterBottom>
                0.00
              </Typography>
              <Button variant="contained" size="medium" color="primary" className={classes.claimButton}>
                Claim
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  )
}

export default StakeCard
