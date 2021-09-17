import { Route, Switch } from 'react-router-dom'

import Intro from './pages/Intro'
import Dashboard from './pages/Dashboard'

export const PATHS = {
  intro: '/',
  dashboard: '/dashboard',
}

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  )
}
