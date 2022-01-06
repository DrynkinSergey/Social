import React from 'react';
import {Field, reduxForm} from "redux-form";

const SendMessageForm = (props) =>{
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body);
    }
    let onSendMessageClick = () => {
        props.onSendMessage();
        props.dialogsPage.newMessageText=''
    }
    return(
    <form onSubmit={props.handleSubmit}>
    <div><Field name={"message"} component={"textarea"} onChange={onMessageChange} value={props.dialogsPage.newMessageText} > </Field></div>
<div> <button  onClick={ onSendMessageClick} >Отправить</button></div>
    </form>
);}
const SendMessageReactForm = reduxForm({form:"sendMessage"})(SendMessageForm)


export default SendMessageReactForm;