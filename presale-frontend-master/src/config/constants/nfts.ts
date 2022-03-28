import { Nft, NftSource, NftType } from './types'

export const IPFS_GATEWAY = 'https://cloudflare-ipfs.com'

export const nftSources: NftSource = {
  [NftType.PANCAKE]: {
    address: {
      1: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
      3: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
    },
    identifierKey: 'image',
  },
  [NftType.MIXIE]: {
    address: {
      1: '0xa251b5EAa9E67F2Bc8b33F33e20E91552Bf85566',
      3: '',
    },
    identifierKey: 'image',
  },
}

/**
 * NOTE: https://cloudflare-ipfs.com does not support video streaming so for the video URLS we need to use
 * https://gateway.pinata.cloud
 */

const Nfts: Nft[] = []

export default Nfts
