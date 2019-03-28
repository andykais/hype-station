import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// page imports
import { Page as CreatorPage } from './containers/CreatorPage'
import { Page as HomePage } from './containers/HomePage'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/creator',
    component: CreatorPage
  }
]

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))}
    </Switch>
  </Router>
)
