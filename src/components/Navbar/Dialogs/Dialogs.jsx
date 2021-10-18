import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return(

    <li className={s.item}>
        <NavLink to={path}>{props.name}</NavLink>
    </li>
    );

}
const MessageSent = (props) => {
    return(
            <div className={`${s.message} ${s.sent} ${s.custom}`}>
                {props.messages}
            </div>
    );
}
const MessageIncome = (props) => {
    return(
        <div className={`${s.message} ${s.income} ${s.custom}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum cumque deleniti doloribus eligendi eum fugit magnam nemo, nesciunt nulla obcaecati ullam ut! Corporis cupiditate dignissimos facere, nemo pariatur rerum?
           <p>{props.messages}</p>
        </div>
    );
}

const Dialogs = () =>{

    return(
        <div className={s.dialogsWrapper}>
            <div className={s.friendsList}>
                <h2>Контакты</h2>
                <div>
                        <DialogItem name='Сергей' id='1'/>
                        <DialogItem name='Настя' id='2'/>
                        <DialogItem name='Алиса' id='3'/>
                        <DialogItem name='Толик' id='4'/>
                        <DialogItem name='Дима' id='5'/>
                </div>
            </div>
            <div className={s.dialog}>
                <h2>Сообщения</h2>
               <MessageSent messages={'lorloremloremloremloremloremloremloremloremloremloremloremloremem'}/>
               <MessageSent messages={'            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum cumque deleniti doloribus eligendi eum fugit magnam nemo, nesciunt nulla obcaecati ullam ut! Corporis cupiditate dignissimos facere, nemo pariatur rerum?\n'}/>
               <MessageIncome messages='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam at, esse exercitationem fugit iusto laborum, minus molestiae nemo obcaecati perspiciatis quas ratione repellat rerum sint sunt tenetur! Magnam, vel?'/>
               <MessageIncome messages='lorasfafsfasfas fasdddddddddddddddsasdasdadadadddddddd ddddddddddddddddddddem'/>
               <MessageIncome messages='lorasfafsfasfasfasddddd ddddddddddsasdasdada dadddddddddddddd ddddddddddddddem'/>
            </div>

        </div>

    );
}
export default Dialogs;