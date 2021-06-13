import React from 'react'

export const CartList = () => {
  return (
    <tr>
      <td>
        <figure className="itemside align-items-center">
          <div className="aside"><img alt="" src="/images/items/1.jpg" className="img-sm"/>
          </div>
          <figcaption className="info">
            <a href="#" className="title text-dark">Camera Canon EOS M50 Kit</a>
            <p className="text-muted small">Matrix: 25 Mpx <br/> Brand: Canon</p>
          </figcaption>
        </figure>
      </td>
      <td>
        <select className="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </td>
      <td>
        <div className="price-wrap">
          <var className="price">$1156.00</var>
          <small className="text-muted"> $315.20 each </small>
        </div>
      </td>
      <td className="text-right d-none d-md-block">
        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"/></a>
        <a href="" className="btn btn-light"> Remove</a>
      </td>
    </tr>
  )}