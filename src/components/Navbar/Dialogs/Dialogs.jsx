import React from "react";
import s from './Dialogs.module.css';
import {MessageIncome, MessageSent} from "./Messages/Messages"
import DialogItem from "./DialogItem/DialogItem";
const Dialogs = (props) => {
    debugger
    /*Создаем массив сообщений путем маппинга, мапим каждый элемент из старого массива в новый, проходим по каждому
    * Message и берем его значение, возвращаем массив MessageElements для дальнейшего использования*/
    let messagesElements = props.dialogsPage.messages.map(message => <MessageSent message={message.message}/>);

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let newMessageBody = props.newMessageText;
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body);
    }
    let onSendMessageClick = () => {
        props.onSendMessage();
        props.dialogsPage.newMessageText=''
        console.log(props.dialogsPage.newMessageText)
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
                    <div><textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} > </textarea></div>
                   <div> <button onClick={ onSendMessageClick} >Отправить</button></div>
                </div>
                {messagesElements}
                <MessageIncome/>
            </div>
        </div>
    );
}
export default Dialogs;