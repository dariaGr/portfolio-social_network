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

    addMessage() {
        const newMessage = {
            id: 4,
            text: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
    },

    addPost() {
    const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
    },

    updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
    }
};

export default store;