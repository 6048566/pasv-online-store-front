import React, { useEffect } from 'react'
import { CartListItem } from './cart-list-item'
import { cartStore } from '../../../../store/cart-store'
import { observer } from 'mobx-react-lite'
import { Loader } from '../../../shared/loader/loader'

export const CartList = observer(() => {

  useEffect(() => {
    cartStore.loadCart()
  }, [])

  if (cartStore.isCartProductsListLoading)
    return <tr>
      <td style={{ width: '100%' }}><Loader/></td>
    </tr>

  return (
    <>
      {cartStore.cartProductsList.map(p => <CartListItem key={p.id} item={p}/>)}
    </>
  )
})
