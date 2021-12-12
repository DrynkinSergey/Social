import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRES = 'TOOGLE_IS_FOLLOWING_PROGRES';

let initialState = {
    users: [],
    pageSize:15,
    totalUsersCount:350,
    currentPage:1,
    isFetching:true,
    followingInProgress:[]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {...state,
                    users:state.users.map(user => {
                        if(user.id === action.userID){
                            return {...user,
                                followed: !user.followed};
                        }
                        return user
                    })
            }
        case SET_USERS:{
        return {...state,
            users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage : action.currentPage}
        }
        case TOOGLE_IS_FETCHING:{
            return {...state, isFetching : action.isFetching}
        }
        case TOOGLE_IS_FOLLOWING_PROGRES:{
            return {...state, followingInProgress : action.isFetching
                    ? [...state.followingInProgress, action.userId]
        :state.followingInProgress.filter(id => id != action.userId)
        }
        }
        default:
            return state;

    }
}
export const acceptFollow = (userID) => {
    return (
        {
            type:FOLLOW,
            userID
        }
    )
}
export const setUsers = (users) => {
    return (
        {
            type:SET_USERS,
            users
        }
    )
}
export const setCurrentPage= (currentPage) => {
    return (
        {
            type:SET_CURRENT_PAGE,
            currentPage

        }
    )
}
export const setIsFetching= (isFetching) => {
    return (
        {
            type:TOOGLE_IS_FETCHING,
            isFetching

        }
    )
}
export const toggleFollowingProgress= (isFetching, userId) => {
    return (
        {
            type:TOOGLE_IS_FOLLOWING_PROGRES,
            isFetching,
            userId

        }
    )
}

export const getUsers = (currentPage,pageSize) => {

    return (dispatch) =>{
        dispatch(setIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(response.items))
        });
    }

}
export const follow = (userId) => {

    return (dispatch) =>{
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.setFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(acceptFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}


export const unfollow = (userId) => {

    return (dispatch) =>{
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.setUnfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(acceptFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }

}



export default usersReducer;