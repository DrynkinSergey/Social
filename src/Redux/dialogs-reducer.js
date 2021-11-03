const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Сергей'},
        {id: 2, name: 'Настя'},
        {id: 3, name: 'Алиса'},
        {id: 4, name: 'Алена'},
        {id: 5, name: 'Толик'}
    ],
    messages: [
        {id: 1, message: '1'},
        {id: 2, message: '2'},
        {id: 3, message: '3'},
        {id: 4, message: '4'},
        {id: 5, message: '5'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state =initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            let addMessage = {id: 1, message: body};
            state.messages.push(addMessage);
            return state;
        default:
            return state;

    }

}

export const sendMessageCreator = () => {
    return (
        {
            type:SEND_MESSAGE

        }
    )
}
export const updateNewMessageBodyCreator = (text) => {
    return (
        {
            type:UPDATE_NEW_MESSAGE_TEXT,
            text: text
        }
    )
}

export default dialogsReducer;