import axios from "axios";

const instance = axios.create(
    {
        withCredentials:true,
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        headers:{
            "API-KEY":"6e503542-cf2e-4397-8f82-3ac13c8d9bd5"
        }
    }
)
export const profileAPI = {
    getProfile(userId)
    {

        return instance.get('profile/'+userId)

    },
    getStatus(userId) {
        return instance.get('profile/status/'+userId)
    },
    updateStatus(status){
        return instance.put('profile/status/', {status:status})
    }
}
export const userAPI = {
    getRequestUsers(currentPage = 1,totalUsersCount = 10)
    {
        return instance.get(`users?page=${currentPage}& count=${totalUsersCount}`)
            .then(response =>
            {
                return response.data;
            })
    },
    getAuth ()
    {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout (){
        return instance.delete(`auth/login`)
    },


    setFollow(userId)
    {
        return instance.post(`follow/${userId}`)
    },
    setUnfollow(userId)
    {
        return instance.delete(`follow/${userId}`)
    }

}



