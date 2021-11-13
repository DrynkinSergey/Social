import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <div>
            <Header/>
            <div className="app-wrapper">
                <Navbar state={props.state.sidebar}/>

                <div className="app-wrapper-content">
                    <Route path='/Profile'
                           render={() => <Profile store={props.store}/>}/>

                    <Route path='/Dialogs'
                           render={() => <DialogsContainer store={props.store} />}/>
                </div>
            </div>
        </div>
    );
}

export default App;
