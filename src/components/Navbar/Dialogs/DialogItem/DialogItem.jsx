import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <li className={s.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
}
export default DialogItem;