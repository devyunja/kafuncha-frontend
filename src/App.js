import Intro from './component/Intro';
import Dashboard from './component/Dashboard';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/">
            <Intro />
          </Route>
          <Route path="/info">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}