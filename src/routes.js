import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { User } from './pages/user/users.page'
import { NotFound } from './pages/notfound/NotFound.page'

export const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={User} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}