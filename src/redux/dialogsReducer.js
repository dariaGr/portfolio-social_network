const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                text: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;  
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    };
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message});

export default dialogsReducer;