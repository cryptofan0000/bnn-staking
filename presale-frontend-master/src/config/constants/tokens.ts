import { ChainId, Token } from '@bananafinance/sdk'

export const GRIMEX: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x89671544190ee39e469c8393009875df6565457a',
    18,
    'BANANA',
    'SpacegrimeSwap Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x5b4053a5691c57e3fe969face3123a43aa83b21c',
    18,
    'BANANA',
    'SpacegrimeSwap Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x78e7c71347df3bc1a87d767128d303a7c897eff4',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  bnnf: {
    symbol: 'BNNF',
    address: {
      1: '0x89671544190ee39e469c8393009875df6565457a',
      3: '0xa3E1b66634DA66E0852cC96deb8F27Adb141c11D',
    },
    decimals: 18,
    projectLink: 'https://banana.finance/',
  },
  wbnb: {
    symbol: 'WETH',
    address: {
      1: '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
      3: '0x7Ea5978609c954BaCf42D529e2C081d13b2753e3',
    },
    decimals: 18,
    projectLink: 'https://splinterlands.com',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      1: '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
      3: '0x78e7c71347df3bc1a87d767128d303a7c897eff4',
    },
    decimals: 18,
    projectLink: 'https://splinterlands.com',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      1: '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
      3: '0x243930a3676026AA537A6e0ce4fA72a16F573fB1',
    },
    decimals: 18,
    projectLink: 'https://splinterlands.com',
  },
  xbx: {
    symbol: 'XBX',
    address: {
      1: '0x46dceb1bb2c55531d12a4e769e8088f4af64d410',
      3: '0xC6f8521302Bd831E813f5AE632Dd6C6aBAadDC27',
    },
    decimals: 18,
    projectLink: 'https://splinterlands.com',
  },
}

export default tokens
