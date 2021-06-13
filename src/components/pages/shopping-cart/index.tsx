import React from 'react'
import { CartList } from './cart-list'
import { PaymentForm } from './payment-form'

export const ShoppingCart = () => {
  return (
    <div style={{ padding: 25 }}>
      <div className="row">
        <aside className="col-lg-9">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" style={{ width: 120 }}>Quantity</th>
                    <th scope="col" style={{ width: 120 }}>Price</th>
                    <th scope="col" className="text-right d-none d-md-block" style={{ width: 200 }}/>
                  </tr>
                </thead>
                <tbody>

                  <CartList/>

                </tbody>
              </table>
            </div>
            <div className="card-body border-top">
              <p className="icontext"><i className="icon text-success fa fa-truck"/> Free Delivery within 1-2 weeks
              </p>
            </div>
          </div>
        </aside>

        <PaymentForm/>

      </div>
    </div>
  )
}