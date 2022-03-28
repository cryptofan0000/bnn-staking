import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.xbx,
    earningToken: tokens.xbx,
    contractAddress: {
      3: '0x6f37881cD2BC8064a889c69f4D736F7BABBa6853',
      1: '0x21A2C51C37EF2dD0C74B6626f03213885F41028d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '11.89',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 2,
  //   stakingToken: tokens.xbx,
  //   earningToken: tokens.bnnf,
  //   contractAddress: {
  //     3: '0x548F3cB7B540A602148D4403712e8C7B1b44c6b8',
  //     1: '0xd35B926071a09Aa2DeF99CC067bA4B11532fdBA5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.00000004',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
  // {
  //   sousId: 3,
  //   stakingToken: tokens.bnnf,
  //   earningToken: tokens.bnnf,
  //   contractAddress: {
  //     3: '0x807E890CF6a6554365A7fe7926bd32b38A996085',
  //     1: '0xd35B926071a09Aa2DeF99CC067bA4B11532fdBA5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.17',
  //   sortOrder: 3,
  //   isFinished: false,
  // },
  // {
  //   sousId: 4,
  //   stakingToken: tokens.usdt,
  //   earningToken: tokens.bnnf,
  //   contractAddress: {
  //     3: '0xa69F7cc40217eC5dA0FF00C472354772F72802F0',
  //     1: '0xd35B926071a09Aa2DeF99CC067bA4B11532fdBA5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0000007',
  //   sortOrder: 4,
  //   isFinished: false,
  // },
  // {
  //   sousId: 5,
  //   stakingToken: tokens.wbnb,
  //   earningToken: tokens.bnnf,
  //   contractAddress: {
  //     3: '0x5dAAAB128790Ea2C98610A9FaF558F02A4cBce95',
  //     1: '0xd35B926071a09Aa2DeF99CC067bA4B11532fdBA5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.00000000013',
  //   sortOrder: 5,
  //   isFinished: false,
  // },
]

export default pools
