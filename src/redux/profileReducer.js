import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 17},
        {id: 2, message: 'My first post!', likesCount: 43}
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
        return {
            ...state,
            status: action.status
        }
        default:
            return state;
    };
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = userId => dispatch => {
    ProfileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data.data));
        });
};

export const getUserStatus = userId => dispatch => {
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
        });
};

export const updateUserStatus = status => dispatch => {
    ProfileAPI.updateStatus(status).then(data => {
        if (data.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};

export default profileReducer;