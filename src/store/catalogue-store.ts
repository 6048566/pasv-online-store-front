import { runInAction, makeAutoObservable } from 'mobx'
import api from '../api'
import { ModestProduct } from '../types/product'
import { PaginationLinks } from '../types/pagination'

class CatalogueStore {

  productsList = {
    result: [] as ModestProduct[],
    count: 0,
    page: 1,
    pages: 1,
    links: {} as PaginationLinks
  }
  isProductsListLoading = false
  error = ''

  constructor() {
    makeAutoObservable(this)
  }


  loadAllProductsData(page) {
    this.isProductsListLoading = true

    api.get(
      '/product/all/?page=' + page)
      .then(res => {
        runInAction(() => {
          this.productsList = res.data
        })
      })
      .catch(error => {
        this.error = error.response
      })
      .finally(() => runInAction(() => this.isProductsListLoading = false))
  }

}

export const catalogueStore = new CatalogueStore()
