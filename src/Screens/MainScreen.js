import {AUTH_STATUS} from "../constants/storageKeys";

const MainScreen = () => {
    const handleLogout = () => {
        localStorage.removeItem(AUTH_STATUS);
        alert(`You're out`);
    }
    return <div>
        <h1>This is the main screen</h1>
        <button type='button' onClick={handleLogout}>Log out</button>
    </div>
}

export default MainScreen;
