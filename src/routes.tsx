import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CataloguePage } from './components/pages/catalogue'
import { CertainProduct } from './components/pages/certain-product/certain-product'
import { ShoppingCart } from './components/pages/shopping-cart'
import { Home } from './components/pages/home/home'
import { OrderDeliveryForm } from './components/pages/order-delivery-form'
import { cartStore } from './store/cart-store'
import { Observer } from 'mobx-react-lite'
import { Registration } from './components/pages/register'
import { Login } from './components/pages/login'
import { OrderedDeliveryForm } from './components/pages/order-delivery-form/ordered-delivery-form'

// import Dashboard from "./pages/dashboard"
// import Profile from "./pages/profile";
// import Faq from "./pages/faq";
// import Logout from "./pages/auth/logout";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} exact/>
      <Route path="/cart" component={ShoppingCart} exact/>
      <Route path="/products/:pk" component={CertainProduct} exact/>
      <Route path="/products/page/:page" component={CataloguePage} exact/>
      <Route path="/registration" component={Registration} exact/>
      <Route path="/login" component={Login} exact/>
      <Route path="/ordered/delivery" component={OrderedDeliveryForm} exact/>
      <Observer>
        {
          () => cartStore.productsCount
            ? <Route path="/order/delivery" component={OrderDeliveryForm} exact/>
            : <Redirect to={'/home'}/>
        }
      </Observer>
      <Route path="/" component={() => <Redirect to={'/home'}/>}/>
    </Switch>
  )
}

