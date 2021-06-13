import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Catalogue from './components/pages/catalogue'
import { CertainProduct } from './components/pages/certain-product/certain-product'
import { ShoppingCart } from './components/pages/shopping-cart'

// import Dashboard from "./pages/dashboard"
// import Profile from "./pages/profile";
// import Faq from "./pages/faq";
// import Logout from "./pages/auth/logout";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cart" component={ShoppingCart} exact/>
      <Route path="/products/:pk" component={CertainProduct} exact/>
      <Route path="/products/page/:page" component={Catalogue} exact/>
      <Route path="/" component={() => <Redirect to={'/products/page/1'}/>}/>
    </Switch>
  )
}

export default Routes
