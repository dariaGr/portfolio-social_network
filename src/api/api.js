import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '4e591f59-2b8d-4092-b5ec-ee8279f263ce'}
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