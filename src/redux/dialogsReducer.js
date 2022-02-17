const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Dan'},
        {id: 2, name: 'Anthony'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Tim'},
        {id: 5, name: 'Robert'}
    ],
    messages: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How was your day?'},
        {id: 3, text: 'Okay, bye'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                text: state.newMessageText
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }; 
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default:
            return state;
    };
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message});

export default dialogsReducer;