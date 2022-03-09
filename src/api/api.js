import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'd11f2431-a782-4d77-8364-c51847b91de5' },
})

export const UsersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please use ProfileAPI')
    return ProfileAPI.getProfile(userId)
  },
}

export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status })
  },
  savePhoto(photos) {
    const formData = new FormData()
    formData.append('image', photos)

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  },
}

export const AuthAPI = {
  getAuth() {
    return instance.get('auth/me').then(response => response.data)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}

export const SecurityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url')
  },
}
