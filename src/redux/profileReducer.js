const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 17},
        {id: 2, message: 'My first post!', likesCount: 43}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            const stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ''; 
            return stateCopy;
            }
        case UPDATE_NEW_POST_TEXT:
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    };
};

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;