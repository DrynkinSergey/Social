import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import storeContext from "../../../storeContext";

const DialogsContainer = (props) => {
    return <storeContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage;
            let onMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());

            }
          return  <Dialogs dialogsPage={state}
                     onMessageChange={onMessageChange}
                     onSendMessage={onSendMessageClick}
            />
        }
        }

    </storeContext.Consumer>

}
export default DialogsContainer;