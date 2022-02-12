const store = {
    _subscriber() {
        console.log('no subscribers (observers)');
    },

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

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    addMessage(observer) {
        const newMessage = {
            id: 4,
            text: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this.subscribe(observer);
    },

    updateNewMessageText(observer, newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this.subscribe(observer);
    },

    addPost(observer) {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this.subscribe(observer);
    },

    updateNewPostText(observer, newText){
    this._state.profilePage.newPostText = newText;
    this.subscribe(observer);
    }
};

export const state = store.getState();

export default store;