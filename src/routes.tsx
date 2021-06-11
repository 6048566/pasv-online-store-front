import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Catalogue from './components/pages/catalogue'

// import Dashboard from "./pages/dashboard"
// import Profile from "./pages/profile";
// import Faq from "./pages/faq";
// import Logout from "./pages/auth/logout";

const Routes = () => {
  return (
    <Switch>
      <Route path="/products/page/:page" component={Catalogue} exact/>
      <Route path="/" component={() => <Redirect to={'/products/page/1'}/>}/>
    </Switch>
  )
}

export default Routes
