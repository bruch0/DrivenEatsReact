import Body from "./body";
import ConfirmOrder from './Confirm-order'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Body} />
                <Route path='/revisar' component={ConfirmOrder} />
            </Switch>
        </Router>
    )
}