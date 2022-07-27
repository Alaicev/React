import axios from "axios";

let initial = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '6de1bc83-97a4-4e32-8899-9275628755ab'
    }

})
export const Auth = () => {

    return initial
        .get("auth/me")
}


export const getUsersAPI = (currentPage, pageSize) => {
    return initial
        .get(`users?page=${currentPage}&count=${pageSize}`)
}

export const followingAPI = (userId) => {
    return initial
        .post(`follow/${userId}`)
}

export const unfollowingAPI = (userId) => {
    return initial
        .delete(`follow/${userId}`)
}

export const profileAPI = (userId) => {
    return initial
        .get(`profile/${userId}`)
}

export const getStatus = (userId) => {
    return initial
        .get(`/profile/status/${userId}`)
}

export const updateStatus = (status) => {
    return initial
        .put(`/profile/status/`, {status:status})
}