import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { User } from './pages/user/users.page'
import { NotFound } from './pages/notfound/NotFound.page'

export const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={User} />
        <Route path="*" component={NotFound} />
      </Router>
    </React.Fragment>
  )
}