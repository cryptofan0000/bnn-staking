import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Banana Finance',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Banana Finance), NFTs, and more, on a platform you can trust.',
  image: 'https://banana.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Banana Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Banana Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Banana Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Banana Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Banana Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Banana Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Banana Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Banana Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Banana Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Banana Finance')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Banana Finance')}`,
      }
    default:
      return null
  }
}
