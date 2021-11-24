const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
    users: [],
    pageSize:7,
    totalUsersCount:159,
    currentPage:1
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
        default:
            return state;

    }
}
export const followAC = (userID) => {
    return (
        {
            type:FOLLOW,
            userID
        }
    )
}
export const setUsersAC = (users) => {
    return (
        {
            type:SET_USERS,
            users
        }
    )
}
export const setCurrentPageAC= (currentPage) => {
    return (
        {
            type:SET_CURRENT_PAGE,
            currentPage

        }
    )
}

export default usersReducer;