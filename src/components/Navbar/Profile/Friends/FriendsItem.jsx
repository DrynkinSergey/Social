import React from "react";
import s from './friends.module.css';

const FriendsItem = (props) => {
    return(<div  className={s.friendsItem}>
            <img className={s.img} src={props.src} alt=""/>
            <div className={s.name}>{props.name}</div></div>
    )
    }

export default FriendsItem;