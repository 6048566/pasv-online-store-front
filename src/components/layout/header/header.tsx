import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchForm } from './search-form'
import { cartStore } from '../../../store/cart-store'
import { Observer } from 'mobx-react-lite'

export const Header = () => {

  return (
    <>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-lg-2">
                <NavLink to="/home" className="brand-wrap">
                  <img className="logo" alt="" src="/images/logo.png"/>
                </NavLink>
              </div>
              <div className="col-6 col-lg-1">
                <NavLink activeClassName="dark font-weight-bold" to="/products/page/1" className="brand-wrap">
                  Catalogue
                </NavLink>
              </div>
              <div className="col-6 offset-lg-1 col-lg-4">
                <SearchForm/>
              </div>
              <div className="col-6 col-lg-4">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header  mr-3">
                    <NavLink to="/cart" className="icon icon-sm rounded-circle border"><i
                      className="fa fa-shopping-cart"/></NavLink>
                    <Observer>
                      {() => <span className="badge badge-pill badge-danger notify">{cartStore.productsCount}</span>}
                    </Observer>
                  </div>
                  <div className="widget-header icontext">
                    <a href="#" className="icon icon-sm rounded-circle border"><i
                      className="fa fa-user"/></a>
                    <div className="text">
                      <span className="text-muted">Welcome!</span>
                      <div>
                        <a href="#">Sign in</a> |
                        <a href="#"> Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}



