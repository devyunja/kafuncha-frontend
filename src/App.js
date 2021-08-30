import Intro from './component/Intro';
import Dashboard from './component/Dashboard';
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