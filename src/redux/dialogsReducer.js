const ADD_MESSAGE = 'ADD_MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                text: action.NewMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }; 
        default:
            return state;
    };
};

export const addMessage = (NewMessageBody) => ({type: ADD_MESSAGE, NewMessageBody});

export default dialogsReducer;