import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setIsFetching, setUsers} from "../../../Redux/users-reducer";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.totalUsersCount}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count=${this.props.totalUsersCount}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        return <>
            <Users currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        onPageChanged={this.onPageChanged}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        isFetching={this.props.isFetching}
        />
        </>

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching


    }
}
/*

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toogleIsFetching:(isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}
*/

export default connect(mapStateToProps, {follow,    setUsers,
    setCurrentPage, setIsFetching})(UsersContainer);


