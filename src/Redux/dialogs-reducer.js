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
        {id: 6, message: '5'},
        {id: 7, message: '5'},
        {id: 8, message: '5'},
        {id: 9, message: '5'},
        {id: 19, message: '5'},
        {id: 12, message: '5'},
        {id: 532, message: '5'},
    ],
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessage;
            return {...state,
                messages: [...state.messages,{id: 1, message: body}]}
        }

        default:
            return state;

    }

}

export const sendMessageCreator = (newMessage) => {
    return (
        {
            type: SEND_MESSAGE,
            newMessage

        }
    )
}

export default dialogsReducer;