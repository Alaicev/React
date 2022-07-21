import axios from "axios";

let initial = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials:false,
    headers: {
        'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
    }

})
export const Auth = () => {
    return  initial
        .get("auth/me", {withCredentials:true})
}

export const getUsersAPI = (currentPage, pageSize) => {
    return initial
        .get(`users?page=${currentPage}&count=${pageSize}`)
}