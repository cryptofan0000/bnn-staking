import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useStakeFarms = (pair: string) => {
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(masterChefContract, pair, amount)
      console.info(txHash)
    },
    [masterChefContract, pair],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
