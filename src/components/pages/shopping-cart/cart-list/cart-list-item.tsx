import React, { useState } from 'react'
import { CounterInput } from '../../../shared/counter-input'
import { CartProductInfo } from '../../../../types/cart'
import { cartStore } from '../../../../store/cart-store'

type Props = {
  item: CartProductInfo
}

export const CartListItem = ({ item }: Props) => {

  // const productStore = useRef(new CertainProductStore())
  //
  // useEffect(() => {
  //   productStore.current.loadProduct(item.product.toString())
  // }, [])
  //
  // useEffect(() => {
  //
  // }, [productStore.current.product])


  const [buyQuantity, setBuyQuantity] = useState(1)
  return (
    <tr>
      <td>
        <figure className="itemside align-items-center">
          <div className="aside"><img alt="" src="/images/items/1.jpg" className="img-sm"/>
          </div>
          <figcaption className="info">
            <a href="#" className="title text-dark">{item.product}</a>
            <p className="text-muted small">Matrix: 25 Mpx <br/> Brand: Canon</p>
          </figcaption>
        </figure>
      </td>
      <td>
        <CounterInput
          onBlur={() => console.log('Игорь!')}
          value={buyQuantity} setValue={setBuyQuantity}
          min={1} max={10}/>
      </td>
      <td>
        <div className="price-wrap">
          <var className="price">$1156.00</var>
          <small className="text-muted"> $315.20 each </small>
        </div>
      </td>
      <td className="text-right d-none d-md-block">
        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i
          className="fa fa-heart"/></a>
        <button onClick={() => cartStore.removeProduct(item.product)} className="btn btn-light">Remove</button>
      </td>
    </tr>
  )
}
