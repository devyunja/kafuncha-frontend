import Intro from './pages/Intro';
import Dashboard from './pages/Dashboard';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

export default function App(){
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path ="/">
            <Intro />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}
