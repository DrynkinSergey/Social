import React from "react";
import s from './Dialogs.module.css';
import {MessageIncome, MessageSent} from "./Messages/Messages"
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    /*Создаем массив сообщений путем маппинга, мапим каждый элемент из старого массива в новый, проходим по каждому
    * Message и берем его значение, возвращаем массив MessageElements для дальнейшего использования*/
    let messagesElements = state.messages.map(message => <MessageSent message={message.message}/>);

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let newMessageBody = state.newMessageText;
    let onMessageChange = (e) => {
        let body = e.target.value;
        debugger
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
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
                    <div><textarea onChange={onMessageChange} value={newMessageBody} ></textarea></div>
                   <div> <button onClick={ onSendMessageClick} >Отправить</button></div>
                </div>
                {messagesElements}
                <MessageIncome/>
            </div>
        </div>
    );
}
export default Dialogs;