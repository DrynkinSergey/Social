import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC} from "../../../Redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
    return  {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage

    }}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);


export default UsersContainer;