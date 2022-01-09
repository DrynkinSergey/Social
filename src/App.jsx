import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import UsersContainer from "./components/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/Header-Container";
import Login from "./components/login/login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initilizeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initilizeApp();
    }

    render() {
        //пока идет процесс инициализации приложения показываем прелоадер
        if (!this.props.initialized)
        {        return <Preloader/>
        }
        return (
            <div>
                <HeaderContainer/>
                <div className="app-wrapper">
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path='/Profile'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/Dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/Users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/Login'
                               render={() => <Login/>}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized:state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps,{initilizeApp}))(App);

