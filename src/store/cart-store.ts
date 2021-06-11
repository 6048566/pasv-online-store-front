import { observable, action, makeObservable, runInAction } from 'mobx'
import api from '../api'

class CartStore {

  productsCartStore = {
    result: [],
    count: 0,
    page: 1,
    pages: 1,
    links: {}
  }
  isProductsCartLoading = false
  error = ''

  constructor() {
    makeObservable(this, {
      productsCartStore: observable,
      isProductsCartLoading: observable,
      error: observable
    })
  }


  createCustomerToken2 = action(requestData => {
    api.post(
      '/customer/create/', {})
      .then(res => {
        runInAction(() => {
          if (res.data.status === true) {
            localStorage.setItem('customer_token', res.data.customer_token)
          }
        })
      })
      .catch(error => {
        error = error.response
      })
  })

  createCustomerToken() {
    api.get(
      '/customer/create/')
      .then(res => {
        runInAction(() => {
          localStorage.setItem('customer_token', res.data.customer_token)
        })
      })
      .catch(error => {
        this.error = error.response

      })
  }
}


export default new CartStore()
