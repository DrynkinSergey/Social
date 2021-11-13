import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    }

    return (
        <Dialogs  dialogsPage={state}
                  onMessageChange={onMessageChange}
                 onSendMessage={onSendMessageClick}

        />
    );
}
export default DialogsContainer;