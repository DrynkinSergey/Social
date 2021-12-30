import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=20911;
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render() {

        return (
          <Profile {...this.props}  getProfile={this.props.getProfile}
                   profilePage={this.props.profilePage} profile={this.props.profile}
                   friends={this.props.friends} updateStatus={this.props.updateStatus} status={this.props.status}/>
        );
    }
}


let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    profilePage: state.profilePage,
    friends:state.profilePage.friends,
    status:state.profilePage.status
});

export default compose(
    connect (mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)