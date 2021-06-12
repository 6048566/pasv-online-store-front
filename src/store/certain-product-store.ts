import { FullProduct } from '../types/product'
import api from '../api'
import { makeAutoObservable, runInAction } from 'mobx'

class CertainProductStore {
  product: FullProduct | null = null
  isLoading = false
  error = ''

  constructor() {
    makeAutoObservable(this)
  }

  loadProduct(productKey: string) {
    this.isLoading = true

    api.get(
      '/product/get/' + productKey)
      .then(res => {
        runInAction(() => {
          this.product = res.data
        })
      })
      .catch(error => {
        this.error = error.response
      })
      .finally(() => runInAction(() => this.isLoading = false))
  }
}

export const certainProductStore = new CertainProductStore()
