import { makeAutoObservable, runInAction } from 'mobx'
import { api } from '../api'
import { CartProductInfo } from '../types/cart'

class CartStore {

  isCartProductsListLoading = false
  error = ''
  cartProductsList = [] as CartProductInfo[]

  get productsCount() {
    return this.cartProductsList.length
  }

  constructor() {
    makeAutoObservable(this)
    this.createCustomerToken().then(() => this.loadCart())
  }

  createCustomerToken() {
    if (localStorage.getItem('customer_token')) return Promise.resolve()
    return api.post(
      '/customer/create/', {})
      .then(res => {
        if (res.data.status === true) {
          localStorage.setItem('customer_token', res.data.customer_token)
        }
      })
      .catch(error => {
        runInAction(() => this.error = error.response.data.error)
        console.dir(error)
      })
  }

  loadCart() {
    this.isCartProductsListLoading = true
    api.get(`/order/cart/list/${localStorage.getItem('customer_token')}/`)
      .then(res => runInAction(() => this.cartProductsList = res.data))
      .catch(error => {
        runInAction(() => this.error = error.response.data.error)
        console.dir(error)
      })
      .finally(() => runInAction(() => this.isCartProductsListLoading = false))
  }

  async updateProduct(productId: number, quantity: number) {
    await api.post('/order/cart/update/', {
      token: localStorage.getItem('customer_token'),
      product_id: productId,
      quantity
    }).then(res => res.data).catch(error => {
      runInAction(() => this.error = error.response.data.error)
      console.dir(error)
    })
  }

  async addToCart(productId: number) {
    const buyQuantity = this.cartProductsList.find(p => p.product === productId)?.quantity || 0
    const available = (await api.get('/product/get/' + productId)).data.quantity

    if (available <= buyQuantity) return

    await this.updateProduct(productId, buyQuantity + 1)
    this.loadCart()
  }

  async removeProduct(productId: number) {
    await this.updateProduct(productId, 0)
    this.loadCart()
  }

}


export const cartStore = new CartStore()
