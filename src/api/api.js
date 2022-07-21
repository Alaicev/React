import axios from "axios";

let initial = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers: {
        'API-KEY': '6de1bc83-97a4-4e32-8899-9275628755ab'
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
