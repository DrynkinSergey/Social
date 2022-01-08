import React from 'react';
import {Field, reduxForm} from "redux-form";

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessage"} component={"textarea"} > </Field></div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    );
}
const SendMessageReactForm = reduxForm({form: "sendMessage"})(SendMessageForm)


export default SendMessageReactForm;