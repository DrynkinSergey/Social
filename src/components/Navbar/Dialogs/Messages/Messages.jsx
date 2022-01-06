import React from "react";
import s from './Messages.module.css';

const MessageSent = (props) => {
    return(
            <div className={`${s.message} ${s.sent} ${s.custom}`}>
                {props.message}
            </div>
    );
}
const MessageIncome = (props) => {
    return(
        <div className={`${s.message} ${s.income} ${s.custom}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum cumque deleniti doloribus eligendi eum fugit magnam nemo, nesciunt nulla obcaecati ullam ut! Corporis cupiditate dignissimos facere, nemo pariatur rerum?
           <p>{props.message}</p>
        </div>
    );
}

export  {MessageSent, MessageIncome};
