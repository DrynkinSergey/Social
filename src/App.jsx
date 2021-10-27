import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";


const App = (props) => {
    let sidebar = props.state.sidebar.map(link => <Navbar title={link.title}/>);

    return (
        <div>
            <Header/>
            <div className="app-wrapper">
                <Navbar state={props.state.sidebar}/>

                <div className="app-wrapper-content">
                    <Route path='/Profile'
                           render={() => <Profile dispatch={props.dispatch}
                                                  state={props.state.profilePage}/>}/>

                    <Route path='/Dialogs'
                           render={() => <Dialogs store={props.store} />}/>
                </div>
            </div>
        </div>
    );
}

export default App;
