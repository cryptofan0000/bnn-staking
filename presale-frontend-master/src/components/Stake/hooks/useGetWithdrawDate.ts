import { useCallback } from 'react'
import { getWithdrawDate } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useGetWithdrawDate = (pair: string) => {
  const masterChefContract = useMasterchef()

  const handleGetRewardDate = useCallback(
    async (pair: string) => {
      return await getWithdrawDate(masterChefContract, pair)
    },
    [masterChefContract],
  )

  return { onRewardDate: handleGetRewardDate }
}

export default useGetWithdrawDate
