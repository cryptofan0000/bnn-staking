import React from 'react'
import { useWeb3React } from '@web3-react/core'

import { styled } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Tooltip } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

import * as TokenBalance from 'hooks/useTokenBalance'
// import { usePriceGrimexBusd } from 'state/farms/hooks'
// import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { getBalanceNumber } from 'utils/formatBalance'
import { getBnnfAddress } from 'utils/addressHelpers'

const useStyles = makeStyles((theme) => ({
  wbtext: {
    fontWeight: 600,
    color: theme.palette.type === 'dark' ? 'white' : 'black',
  },
}))

const StyledWalletBalanceBox = styled(Box)({
  borderRadius: '15px',
  border: '1px solid lightgrey',
  padding: '24px 36px',
})

const StyledTopBox = styled(Box)({
  boxSizing: 'border-box',
  background: '#31c77e36',
  width: '100%',
  borderRadius: '10px',
  display: 'flex',
})

const StyledBottomBox = styled(Box)({
  width: '100%',
  display: 'flex',
})

const StyledSubContent = styled(Typography)({
  color: '#31c77e',
  marginBottom: '5px',
})

const StyledValue = styled(Typography)({
  // fontWeight: "bold",
  color: '#31c77e',
  wordBreak: 'break-word',
})

const StyledIcon = styled(AddCircleOutlineIcon)({
  width: '2em',
  height: '2em',
  margin: '10px',
})

export default function TokenEarning() {
  const classes = useStyles()
  const { account } = useWeb3React()

  const totalSupply = TokenBalance.useTotalSupply()
  const burnedBalance = getBalanceNumber(TokenBalance.useBurnedBalance(getBnnfAddress()))
  const { balance: bnnfBalance } = TokenBalance.default(getBnnfAddress())
  const bnnfSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  // const grimexPrice = usePriceGrimexBusd()
  // const [grimexUSDPrice, setGrimexUSDPrice] = useState(0)
  // const [grimexMarketCapUSDBalance, setGrimexMarketCapUSDBalance] = useState(0)

  // useEffect(() => {
  //   setGrimexUSDPrice(Number(getFullDisplayBalance(grimexPrice, 10, 25)))
  //   setGrimexMarketCapUSDBalance(new BigNumber(grimexSupply).multipliedBy(grimexPrice).toNumber())
  // }, [grimexPrice, grimexSupply])

  return (
    <StyledWalletBalanceBox width={{ xs: '100%', lg: '50%' }} m={{ xs: '0 0 36px 0', lg: '0 0 36px 12px' }}>
      <StyledTopBox
        flexDirection={{ xs: 'column', sm: 'row' }}
        p={{ xs: '8px 16px', md: '12px 32px', lg: '12px 48px' }}
      >
        <Box width={{ xs: '100%', lg: '50%' }}>
          <StyledSubContent variant="h6">Your Banana</StyledSubContent>
          <Typography className={classes.wbtext} variant="h5">
            Wallet Balance:
          </Typography>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          alignSelf="center"
          alignItems="center"
          width={{ xs: '100%', lg: '50%' }}
          justifyContent="space-between"
          color="#31c77e"
        >
          {!account ? (
            <StyledValue variant="h5"> LOCKED</StyledValue>
          ) : (
            <StyledValue variant="h4">{getBalanceNumber(bnnfBalance)}</StyledValue>
          )}

          <StyledIcon />
        </Box>
      </StyledTopBox>
      <StyledBottomBox
        flexDirection={{ xs: 'column', sm: 'row' }}
        p={{ xs: '8px 16px', md: '16px 32px', lg: '24px 48px' }}
      >
        <Box width={{ xs: '100%', lg: '50%' }} mr={2}>
          <Box display="flex" justifyContent="space-between" color="#9D9D9D" alignItems="center">
            <Typography variant="h6">Total Value Locked:</Typography>
          </Box>
          <StyledValue variant="h5">{burnedBalance}</StyledValue>
        </Box>
        <Box
          width={{ xs: '100%', lg: '50%' }}
          borderLeft={{ xs: 'none', sm: '2px solid lightgrey' }}
          pl={{ xs: 0, sm: 2 }}
          mt={{ xs: 1, sm: 0 }}
          color="#9D9D9D"
        >
          <Typography variant="h6">Total Supply:</Typography>
          <StyledValue variant="h5">{bnnfSupply}</StyledValue>
        </Box>
      </StyledBottomBox>
    </StyledWalletBalanceBox>
  )
}
