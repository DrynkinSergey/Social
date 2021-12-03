import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../Redux/profile-reducer";
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }
    render() {
        return (
          <Profile {...this.props} profilePage={this.props.profilePage} profile={this.props.profile} friends={this.props.friends}/>
        );
    }
}
let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    profilePage: state.profilePage,
    friends:state.profilePage.friends
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
