import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '7f367b50-e1e3-4664-b642-e4301e6d3072'}
});

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
        );
    }
};

export const ProfileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
            .then(response => response.data)
        );
    }
};

export const FollowAPI = {
    follow(userId) {
        return (
            instance.post(`follow/${userId}`)
            .then(response => response.data)
        );
    },
    unfollow(userId) {
        return (
            instance.delete(`follow/${userId}`)
            .then(response => response.data)
        );
    }
};

export const AuthAPI = {
    getAuth() {
        return (
            instance.get('auth/me')
            .then(response => response.data)
        );
    }
};