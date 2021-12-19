import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        this.props.getProfile(userId)
    }
    render() {

        return (
          <Profile {...this.props} getProfile={this.props.getProfile} profilePage={this.props.profilePage} profile={this.props.profile} friends={this.props.friends}/>
        );
    }
}


let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    profilePage: state.profilePage,
    friends:state.profilePage.friends,
});

export default compose(
    connect (mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)