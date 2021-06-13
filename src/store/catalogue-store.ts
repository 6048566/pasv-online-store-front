import { makeAutoObservable, runInAction } from 'mobx'
import api from '../api'
import { ModestProduct } from '../types/product'
import { PaginationLinks } from '../types/pagination'
import { Category } from '../types/category'
import { Brand } from '../types/brand'

class CatalogueStore {

  productsList = {
    result: [] as ModestProduct[],
    count: 0,
    page: 1,
    pages: 1,
    links: {} as PaginationLinks
  }

  filters = {
    categoryId: null as number | null,
    brandId: null as number | null,
    minPrice: null as number | null,
    maxPrice: null as number | null
  }

  setCategoryId(id: number | null) {
    return this.filters.categoryId = this.filters.categoryId === id ? null : id
  }

  setBrandId(id: number) {
    return this.filters.brandId = this.filters.brandId === id ? null : id
  }

  setMinMaxPrice(min: number, max: number) {
    this.filters.minPrice = min
    this.filters.maxPrice = max
  }

  isProductsListLoading = false
  productsListError = ''

  categoryList: Category[] = []
  isCategoryListLoading = false
  categoryListError = ''

  brandList: Brand[] = []
  isBrandListLoading = false
  brandListError = ''

  constructor() {
    makeAutoObservable(this)
  }

  loadCategoryList() {
    this.isCategoryListLoading = true
    api.get('/product/category/list/')
      .then(res => runInAction(() => this.categoryList = res.data))
      .catch(error => runInAction(() => this.categoryListError = error.response))
      .finally(() => runInAction(() => this.isCategoryListLoading = false))
  }

  loadBrandList() {
    this.isBrandListLoading = true
    api.get('/product/brands/all/')
      .then(res => runInAction(() => this.brandList = res.data))
      .catch(error => runInAction(() => this.brandListError = error.response))
      .finally(() => runInAction(() => this.isBrandListLoading = false))
  }

  loadAllProductsData(page) {
    this.isProductsListLoading = true

    const endpoint = this.filters.categoryId ? `/product/category/${this.filters.categoryId}/products` : '/product/all'

    const query = `?page=${page}
    ${this.filters.brandId ? `&brand_id=${this.filters.brandId}` : ''} 
    ${this.filters.minPrice ? `&min_price=${this.filters.minPrice}` : ''} 
    ${this.filters.maxPrice ? `&max_price=${this.filters.maxPrice}` : ''}`

    api.get(`${endpoint}/${query}`)
      .then(res => runInAction(() => this.productsList = res.data))
      .catch(error => runInAction(() => this.productsListError = error.response))
      .finally(() => runInAction(() => this.isProductsListLoading = false))
  }

}

export const catalogueStore = new CatalogueStore()
