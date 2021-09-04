import { Route, Switch } from 'react-router-dom';
import { Upload , Dashboard } from './pages';


export default function Routes() {

    return(
            <Switch>
                <Route path="/upload" component={ Upload }/>
                <Route path="/dashboard" component={ Dashboard }/>
            </Switch>
    );
}
