import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

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
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
