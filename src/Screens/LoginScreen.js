import {AUTH_STATUS} from "../constants/storageKeys";
import {useLocation, useHistory} from 'react-router-dom';

const LoginScreen = () => {
    const location = useLocation();
    const history = useHistory();

    const performLogin = () => {
        localStorage.setItem(AUTH_STATUS, 'true'); // Or any string that you want. I'm just validating existence after all
        const { from } = location.state || { from: { pathname: "/" } };
        history.replace(from);
    }
    return <div>
        <h1>This is the login screen</h1>
        <h2>You need to log in to access the resource that you want to access</h2>
        <button type='button' onClick={performLogin}>Login</button>
    </div>
}

export default LoginScreen;
