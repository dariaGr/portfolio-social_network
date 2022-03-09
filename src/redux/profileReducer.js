import { ProfileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 17 },
    { id: 2, message: 'My first post!', likesCount: 43 },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      }
    default:
      return state
  }
}

export const addPost = newPostText => ({ type: ADD_POST, newPostText })
export const deletePost = postId => ({ type: DELETE_POST, postId })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = status => ({ type: SET_USER_STATUS, status })
export const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = userId => async dispatch => {
  const data = await ProfileAPI.getProfile(userId)
  dispatch(setUserProfile(data.data))
}

export const getUserStatus = userId => async dispatch => {
  const response = await ProfileAPI.getStatus(userId)
  dispatch(setUserStatus(response.data))
}

export const updateUserStatus = status => async dispatch => {
  try {
    const data = await ProfileAPI.updateStatus(status)

    if (data.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  } catch (error) {
    //
  }
}

export const savePhoto = file => async dispatch => {
  const response = await ProfileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = profile => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await ProfileAPI.saveProfile(profile)

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('profileEdit', { _error: response.data.messages[0] }))
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer
