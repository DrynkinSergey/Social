import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div>
            <Header/>
            <div className="app-wrapper">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile'
                           render={() => <Profile />}/>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer  />}/>
                </div>
            </div>
        </div>
    );
}

export default App;
