const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 17},
            {id: 2, message: 'My first post!', likesCount: 43}
        ]
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
        ]
    }
};

export default state;