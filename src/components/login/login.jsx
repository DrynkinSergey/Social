import React from 'react';
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to={"/Profile/"}/>
    }

    return    <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})


export default connect(mapStateToProps,{login})(Login) ;