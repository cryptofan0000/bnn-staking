import React, { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

// components
import PageTitle from '../../common/components/PageTitle'
import PoolCardItem from './PoolCardItem'
// FIXME: Bring back in phase 2, once complete deploy other BNNF contracts
// import TokenEarning from './TokenEarning'
// import WalletBalance from './WalletBalance'
//import Loading from './Loading'

import { useFetchPublicPoolsData, usePools } from 'state/pools/hooks'

const useStyles = makeStyles((theme) => ({
  styledPaper: {
    backgroundColor: theme.palette.type === 'dark' ? '#292A2D' : 'white',
  },
  available: {
    fontWeight: 'bold',
    color: theme.palette.type === 'dark' ? 'white' : 'black',
    fontFamily: 'Roboto',
    margin: 0,
  },
  paper: {
    padding: '10px',
    width: '100%',
    color: '#9D9D9D',
    fontFamily: 'Roboto',
    fontSize: '16px',
  },
}))

const Stake: React.FC = () => {
  const classes = useStyles()

  const { account } = useWeb3React()

  const { pools: poolsWithoutAutoVault, userDataLoaded: userPoolDataLoaded } = usePools(account)

  const pools = useMemo(() => {
    return [...poolsWithoutAutoVault]
  }, [poolsWithoutAutoVault])

  useFetchPublicPoolsData()

  const chosenPoolsMemoized = useMemo(() => {
    let chosenPools = []
    chosenPools = pools

    return chosenPools
  }, [pools])

  return (
    <Box px={{ xs: 2, sm: 4, lg: 5 }}>
      <PageTitle title="Stake" />
      <Box className={classes.styledPaper} p={{ xs: 2, sm: 4, lg: 5 }}>
        {/* FIXME: Remove comment back once BNNF pools deployed */}
        {/* <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{
            xs: 'column',
            lg: 'row',
          }}
        >
          <TokenEarning />
          <WalletBalance />
        </Box> */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={classes.available} variant="h5" gutterBottom>
            Available Staking Pools &nbsp;&nbsp;
          </Typography>
          {account && !userPoolDataLoaded && <CircularProgress style={{ width: '25px', height: '25px' }} />}
        </div>

        {chosenPoolsMemoized.map((pool) => (
          <PoolCardItem key={pool.sousId} pool={pool} account={account} />
        ))}
      </Box>
    </Box>
  )
}

export default Stake
