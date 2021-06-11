import { runInAction, makeAutoObservable } from 'mobx'
import api from '../api'
import { ModestProduct } from '../types/product'
import { PaginationLinks } from '../types/pagination'

class CatalogueStore {

  productsListStore = {
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


  loadAllProductsData(urlPage) {
    this.isProductsListLoading = true

    api.get(
      '/product/all/?page=' + urlPage)
      .then(res => {
        runInAction(() => {
          this.productsListStore = res.data
          this.productsListStore.result = res.data.result
          this.productsListStore.count = res.data.count
          this.productsListStore.page = res.data.page
          this.productsListStore.pages = res.data.pages
          this.productsListStore.links = res.data.links
        })
      })
      .catch(error => {
        this.error = error.response
        this.isProductsListLoading = false
      })
    this.isProductsListLoading = false
  }

}

export default new CatalogueStore()
