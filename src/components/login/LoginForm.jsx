import React from 'react';
import classes from "./login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
const LoginForm = (props) => {
    return     (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
        <div>
            <Field name={"email"} component={Input}  validate={[required]} placeholder={"Email"}/>
        </div>
        <div>
            <Field name={"password"} component={Input} type={"password"} validate={[required]} placeholder={"Password"}/>
        </div>
        <div>
            <Field name={"rememberMe"} component={Input} type="checkbox"/> запомнить меня
        </div>
            {props.error &&  <div>{props.error}</div>}
        <div>
            <button>Войти</button>
        </div>

    </form>)


};

const LoginReduxForm = reduxForm({form:"login"})(LoginForm)
export default LoginReduxForm;