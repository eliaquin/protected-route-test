import {Route, Redirect} from "react-router-dom";
import {AUTH_STATUS} from "../constants/storageKeys";

function PrivateRoute({children, ...rest}) {
    // You can do here any auth logic that you want to use
    // Here, I have oversimplified this
    const isLoggedIn = !!localStorage.getItem(AUTH_STATUS);
    return (
        <Route
            {...rest}
            render={({location}) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;

