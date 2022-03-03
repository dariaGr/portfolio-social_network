import { ProfileAPI } from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 17},
        {id: 2, message: 'My first post!', likesCount: 43}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
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

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = userId => async dispatch => {
    const data = await ProfileAPI.getProfile(userId);
    dispatch(setUserProfile(data.data));
};

export const getUserStatus = userId => async dispatch => {
    const response = await ProfileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateUserStatus = status => async dispatch => {
    const data = await ProfileAPI.updateStatus(status);

    if (data.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    };
};

export default profileReducer;