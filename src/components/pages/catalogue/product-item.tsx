import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModestProduct } from '../../../types/product'

type Props = {
  item: ModestProduct
}

export const ProductItem = ({ item }: Props) => {
  return (
    <div className="col-md-4">
      <figure className="card card-product-grid">
        <div className="img-wrap">
          <span className="badge badge-danger"> NEW </span>
          <img src={item.photo || '/images/items/1.jpg'} alt=""/>
        </div>
        <figcaption className="info-wrap">
          <div className="fix-height">
            <NavLink to={`/products/${item.id}`} className="title">{item.title}</NavLink>
            <div className="price-wrap mt-2">
              <span className="price">${item.price}</span>
              {(item.old_price) ?
                (
                  <del className="price-old">${item.old_price}</del>
                ) : null
              }

            </div>
          </div>
          <a href="#" className="btn btn-block btn-primary">Add to cart </a>
        </figcaption>
      </figure>
    </div>
  )
}


