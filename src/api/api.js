import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '7f367b50-e1e3-4664-b642-e4301e6d3072'}
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    );
};

