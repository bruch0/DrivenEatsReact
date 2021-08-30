import Body from "./pages/Body";
import ConfirmOrder from './pages/ConfirmOrder'
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