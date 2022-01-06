import React from "react";
import s from './Dialogs.module.css';
import {MessageIncome, MessageSent} from "./Messages/Messages"
import DialogItem from "./DialogItem/DialogItem";
import SendMessageReactForm from "./SendMessageForm";
const Dialogs = (props) => {

    /*Создаем массив сообщений путем маппинга, мапим каждый элемент из старого массива в новый, проходим по каждому
    * Message и берем его значение, возвращаем массив MessageElements для дальнейшего использования*/
    let messagesElements = props.dialogsPage.messages.map(message => <MessageSent key={message.id} message={message.message}/>);

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.friendsList}>
                <h2>Контакты</h2>
                <div>
                    {dialogsElements}
                </div>
            </div>

            <div className={s.dialog}>
                <h2>Сообщения</h2>
                <div className={s.sendMessage}>
                    <SendMessageReactForm {...props} onSubmit={onSubmit}/>
                </div>
                {messagesElements}
                <MessageIncome/>
            </div>
        </div>
    );
}
export default Dialogs;