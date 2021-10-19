import React from "react";
import s from './Dialogs.module.css';
import {MessageIncome, MessageSent} from "./Messages/Messages"
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    /*Создаем массив диалогов*/
    let dialogsData = [
        {id: 1, name: 'Сергей'},
        {id: 2, name: 'Настя'},
        {id: 3, name: 'Алиса'},
        {id: 4, name: 'Алена'},
        {id: 5, name: 'Толик'}
    ]
    /*Создаем массив сообщений*/
    let messagesData = [
        {id: 1, message: '1'},
        {id: 2, message: '2'},
        {id: 3, message: '3'},
        {id: 4, message: '4'},
        {id: 5, message: '5'},
    ]
    /*Создаем массив сообщений путем маппинга, мапим каждый элемент из старого массива в новый, проходим по каждому
    * Message и берем его значение, возвращаем массив MessageElements для дальнейшего использования*/
    let messagesElements = messagesData.map(message => <MessageSent message={message.message}/>);


    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
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
                {messagesElements}
                <MessageIncome/>
            </div>
        </div>
    );
}
export default Dialogs;