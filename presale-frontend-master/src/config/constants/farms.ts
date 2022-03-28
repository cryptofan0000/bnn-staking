import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 251,
    lpSymbol: 'BANANA-BNB LP',
    lpAddresses: {
      3: '0x711D775318F72D04997425B65738daF10B0712CC',
      1: '0xaa03b91C6fF3092bEE509cb4Bcd2579fb1934944',
    },
    token: tokens.bnnf,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      3: '0x109006A52dfB40849C758423D627173a90574021',
      1: '0xE39fA539Cfe036CEAb8ba327C87b75EF7ca5f0d6',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
