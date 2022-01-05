import React from 'react';
import classes from "./login.module.css";
import {Field, reduxForm} from "redux-form";
const LoginForm = (props) => {
    return     (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
        <div>
            <Field name={"login"} component={"input"} placeholder={"Login"}/>
        </div>
        <div>
            <Field name={"password"} component={"input"} placeholder={"Password"}/>
        </div>
        <div>
            <Field name={"remember"} component={"input"} type="checkbox"/> запомнить меня
        </div>
        <div>
            <button>Войти</button>
        </div>
    </form>)


};

const LoginReduxForm = reduxForm({form:"login"})(LoginForm)
export default LoginReduxForm;