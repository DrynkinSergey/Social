import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC} from "../../../Redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
    return  {users:state.usersPage.users}}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);


export default UsersContainer;