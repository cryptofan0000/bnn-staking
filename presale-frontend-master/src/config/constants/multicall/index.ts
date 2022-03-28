import { ChainId } from '@bananafinance/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.TESTNET]: '0x63245159550E852a3117F40b9b3C2Ff5f09F9BA1',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
