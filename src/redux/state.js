let rerenderEntireTree = () => {
    console.log('state');
}

const state = {
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
};

export const addMessage = () => {
    const newMessage = {
        id: 4,
        text: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
};

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};
 
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;