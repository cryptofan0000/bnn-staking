import { useCallback } from 'react'
import { useSousChef } from 'hooks/useContract'

const lockStakeDate = async (sousChefContract) => {
  const stakeDate = await sousChefContract.getLockStakeDate()

  return stakeDate
}

const lockWithdrawDate = async (sousChefContract) => {
  const withdrawDate = await sousChefContract.getLockWithdrawDate()

  return withdrawDate
}

const useGetWithdrawDate = (sousId: number) => {
  const sousChefContract = useSousChef(sousId)

  const handleGetStakeDate = useCallback(async () => {
    return await lockStakeDate(sousChefContract)
  }, [sousChefContract])

  const handleGetWithdrawDate = useCallback(async () => {
    return await lockWithdrawDate(sousChefContract)
  }, [sousChefContract])

  return {
    onStakeDate: handleGetStakeDate,
    onWithdrawDate: handleGetWithdrawDate,
  }
}

export default useGetWithdrawDate
