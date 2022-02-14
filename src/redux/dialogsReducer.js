const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        const newMessage = {
            id: 4,
            text: state.newMessageText
            };
        state.messages.push(newMessage);
        state.newMessageText = '';

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessage;
    };

    return state;
};

export default dialogsReducer;