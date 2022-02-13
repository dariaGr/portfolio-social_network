const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 17},
                {id: 2, message: 'My first post!', likesCount: 43}
            ],
            newPostText: ''
            },
        dialogsPage: {
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
        }
    },

    _callSubscriber() {
        console.log('State has been changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === "ADD_POST") {
            const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);   

        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === "ADD_MESSAGE") {
            const newMessage = {
            id: 4,
            text: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message});

export default store;
