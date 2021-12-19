import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import UsersContainer from "./components/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/Header-Container";
import Login from "./components/login/login";


const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <div className="app-wrapper">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile/:userId'
                           render={() => <ProfileContainer />}/>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer  />}/>
                    <Route path='/Users'
                           render={() => <UsersContainer />}/>
                    <Route path='/Login'
                           render={() => <Login />}/>
                </div>
            </div>
        </div>
    );
}

export default App;
