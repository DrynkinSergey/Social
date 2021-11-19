const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    users: [/*{id:1, name:'Sergey',status:'Hi', followed:true, location:{city:'Moscow', country:'Russia'}},
        {id:2, name:'Sasha',status:'Hi', followed:true, location:{city:'Moscow', country:'Russia'}},
        {id:3, name:'Andrey',status:'Hi', followed:false, location:{city:'Kiev', country:'Ukraine'}},
        {id:4, name:'Alice',status:'Hi', followed:true, location:{city:'Moscow', country:'Russia'}},
    */]
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
            users: [...state.users,...action.users]}
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


export default usersReducer;