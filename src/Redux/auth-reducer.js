import {userAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;

    }
}
export const setAuthUserData = (userId, email, login,isAuth) => {

        return(
            {
            type:SET_USER_DATA,
            payload:{
                userId,
                email,
                login,
                isAuth}
            }
        )
    }

export const getAuthData = () => {
    return (dispatch) =>{
          return   userAPI.getAuth()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id,email,login,true));
            }
        });
    }
}
export const login = (email,password, rememberMe) => (dispatch) =>{

        userAPI.login(email,password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(getAuthData())
                } else {
                    dispatch(stopSubmit("login",{_error:"Ошибка при авторизации"}))
                }
            });
    }
export const logout = () => (dispatch) =>{
    userAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false));

            }
        });
}

export default authReducer;