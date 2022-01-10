import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getRequestUsers,
    setCurrentPage,
    toggleFollowingProgress,
} from "../../../Redux/users-reducer";
import Users from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../Redux/users-selectors";
import {withRouter} from "react-router-dom";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getRequestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (currentPage) => {
        this.props.getRequestUsers(currentPage, this.props.pageSize);
    }

    render() {
        return <>
            <Users currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}*/

export default connect(mapStateToProps, {follow, unfollow,  setCurrentPage,toggleFollowingProgress,getRequestUsers})(UsersContainer);


