import NormalScreen from "./Screens/NormalScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProtectedScreen from "./Screens/ProtectedScreen";
import MainScreen from "./Screens/MainScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";


const App = () => {
    return <div>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/normal">Normal route</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected route</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/normal">
                        <NormalScreen/>
                    </Route>
                    <PrivateRoute path="/protected">
                        <ProtectedScreen />
                    </PrivateRoute>
                    <Route path="/login">
                        <LoginScreen />
                    </Route>
                    <Route path="/">
                        <MainScreen />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
}

export default App;
