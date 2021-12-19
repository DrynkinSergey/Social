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
    getProfilePage(userId)
    {
        return instance.get('/profile/'+userId)
            .then(response => {
                return response;
            });
    }
}
export const userAPI = {
    getUsers(currentPage = 1,totalUsersCount = 10)
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

    setFollow(userId)
    {
        return instance.post(`follow/${userId}`)
    },
    setUnfollow(userId)
    {
        return instance.delete(`follow/${userId}`)
    }

}


