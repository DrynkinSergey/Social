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
        {id: 1, message: '1213'},
        {id: 2, message: '2312321'},
        {id: 3, message: '3123123'},
        {id: 4, message: '43123123'},
        {id: 5, message: '5'},
    ],
    newMessageText: '',
}


const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return{...state,
                newMessageText: action.text}
        }
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {...state,
                newMessageText : '',
                messages: [...state.messages,{id: 1, message: body}]}
        }

        default:
            return state;

    }

}

export const sendMessageCreator = () => {
    return (
        {
            type: SEND_MESSAGE

        }
    )
}
export const updateNewMessageBodyCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_TEXT,
            text: text
        }
    )
}

export default dialogsReducer;