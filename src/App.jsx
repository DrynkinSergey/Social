import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";


const App = (props) => {
    return (

        <BrowserRouter>
            <Header/>
            <div className="app-wrapper">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile'  render={()=><Profile state={props.state.profilePage}/>}/>
                    <Route path='/Dialogs' render={()=><Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
