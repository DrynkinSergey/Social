import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);
const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessage"} validate={[required, maxLength50]} component={Textarea} > </Field></div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    );
}
const SendMessageReactForm = reduxForm({form: "sendMessage"})(SendMessageForm)


export default SendMessageReactForm;