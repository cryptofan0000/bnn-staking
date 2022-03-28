// import { useContext } from 'react'
// import { ToastsContext } from 'contexts/ToastsContext'

const useToast = () => {
  const toastContext = undefined //useContext(ToastsContext)

  if (toastContext === undefined) {
    throw new Error('Toasts context undefined')
  }

  return toastContext
}

export default useToast
