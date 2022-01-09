import React from 'react';
import classes from "./login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
const LoginForm = (props) => {
    return     (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
        <div>
            <Field name={"login"} component={Input}  validate={[required]} placeholder={"Login"}/>
        </div>
        <div>
            <Field name={"password"} component={Input} validate={[required]} placeholder={"Password"}/>
        </div>
        <div>
            <Field name={"remember"} component={Input} validate={[required]} type="checkbox"/> запомнить меня
        </div>
        <div>
            <button>Войти</button>
        </div>
    </form>)


};

const LoginReduxForm = reduxForm({form:"login"})(LoginForm)
export default LoginReduxForm;