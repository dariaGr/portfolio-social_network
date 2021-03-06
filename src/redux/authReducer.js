import { AuthAPI, SecurityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if null then captcha is not required
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})
export const getCaptchaUrlSuccess = captchaUrl => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
})

export const getAuthUserData = () => async dispatch => {
  const data = await AuthAPI.getAuth()

  if (data.resultCode === 0) {
    let { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const loginUserData =
  (email, password, rememberMe, captcha) => async dispatch => {
    const response = await AuthAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }

      const message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  }

export const getCaptchaUrl = () => async dispatch => {
  const response = await SecurityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url

  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logoutUserData = () => async dispatch => {
  const response = await AuthAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
