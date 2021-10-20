import React from "react";
import s from './Dialogs.module.css';
import {MessageIncome, MessageSent} from "./Messages/Messages"
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    console.log(props.state.messages)
    console.log(props.state.dialogs)
    /*Создаем массив сообщений путем маппинга, мапим каждый элемент из старого массива в новый, проходим по каждому
    * Message и берем его значение, возвращаем массив MessageElements для дальнейшего использования*/
    let messagesElements = props.state.messages.map(message => <MessageSent message={message.message}/>);

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let newMessageElement = React.createRef();
    let onBtnClick = () => {
      let text = newMessageElement.current.value;
      alert(text);
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
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={onBtnClick} >Отправить</button>
                </div>
                {messagesElements}
                <MessageIncome/>
            </div>
        </div>
    );
}
export default Dialogs;