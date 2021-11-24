const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize:7,
    totalUsersCount:159,
    currentPage:1,
    isFetching:true
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
        default:
            return state;

    }
}
export const follow = (userID) => {
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


export default usersReducer;