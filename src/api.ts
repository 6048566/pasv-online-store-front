import axios from 'axios'
import * as config from './config.json'
import { runInAction } from 'mobx'

const api = axios.create({
  baseURL: config.api_base_url,
  responseType: 'json',
  headers: {
    'authorization': localStorage.getItem('token_access') ? `${config.jwt_prefix} ${localStorage.getItem('token_access')}` : '',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
// api.interceptors.response.use((response) => response, (error) => {
//
//   if (error.response.status === 401 && window.location.pathname !== '/auth') {
//     window.location = '/auth'
//   }
// })
// let error = ''

export default api

if (!localStorage.getItem('cutomer_token')) {
  // cartStore.createCustomerToken()
  api.post(
    '/customer/create/')
    .then(res => {
      runInAction(() => {
        localStorage.setItem('cutomer_token', res.data.customer_token)
      })
    })
    .catch(() => {
      // window.error = error.response
    })
}

