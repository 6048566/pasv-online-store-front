import { useCallback, useState } from 'react'
import { api } from '../../../api'
import { ILoginForm } from './index'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const submitLogin = useCallback((data: ILoginForm) => {
    setIsLoading(true)
    return api.post('/jwt/auth/', data)
      .catch(error => {
        setError(error?.response.data.detail)
        return null
      })
      .finally(() => setIsLoading(false))
  }, [])
  return {
    submitLogin,
    isLoading,
    error
  }
}