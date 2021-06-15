import { FullProduct } from '../types/product'
import { api } from '../api'
import { useEffect, useState } from 'react'


export const useProduct = (productId: number) => {
  const [product, setProduct] = useState<FullProduct | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadProduct = (productKey: number) => {
      setIsLoading(true)
      api.get('/product/get/' + productKey)
        .then(res => {
          setProduct(res.data)
        })
        .catch(error => setError(error.response))
        .finally(() => setIsLoading(false))
    }

    loadProduct(productId)
  }, [])

  return { product, isLoading, error }
}
