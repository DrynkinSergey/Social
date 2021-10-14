import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";

const App =() => {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
            <Route path='/Profile' component={Profile}/>
            <Route path='/Dialogs' component={Dialogs}/>
        </div>
    </div>
          </BrowserRouter>
  );
}

export default App;
