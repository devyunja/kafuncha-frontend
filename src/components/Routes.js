import { Route, Switch } from 'react-router-dom';
import Upload from '../pages/Upload';
import Dashboard  from '../pages/Dashboard';

export default function Routes() {
    // chatHistoty.map(item => console.log(item));
    return(
            <Switch>
                <Route path="/upload" component={ Upload }/>
                <Route path="/dashboard" component={ Dashboard }/>
            </Switch>
    );
}
