/*
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfilePage, getStatus, updateStatus} from "../../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=this.props.authUserId;
            if(!userId) {
                //Делаем редирект если не пришел юзер айди через пуш
                this.props.history.push("/login");
            }
        }
        this.props.getProfilePage(userId)
        this.props.getStatus(userId)
    }
    render() {

        return (
          <Profile {...this.props}
                   getProfile={this.props.getProfile}
                   profilePage={this.props.profilePage}
                   profile={this.props.profile}
                   friends={this.props.friends}
                   updateStatus={this.props.updateStatus}
                   status={this.props.status}/>
        );
    }
}


let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    profilePage: state.profilePage,
    friends:state.profilePage.friends,
    status:state.profilePage.status,
    authUserId:state.auth.userId,
    isAuth:state.auth.isAuth
});

export default compose(
    connect (mapStateToProps, {getProfilePage, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)*/
import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfilePage, getStatus, updateStatus} from "../../../Redux/profile-reducer";
import {useParams} from 'react-router-dom';
import {compose} from "redux";
    const ProfileContainer = (props) => {
      let {userId} = useParams()
        useEffect( () => {
            userId = userId || props.authUserId
            if (userId) {
                props.getProfilePage(userId)
                props.getStatus(userId)
            }
        }, [userId, props.authUserId])

        return   <Profile {...props}/>

}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    profilePage: state.profilePage,
    friends:state.profilePage.friends,
    status:state.profilePage.status,
    authUserId:state.auth.userId,
    isAuth:state.auth.isAuth
});

export default compose(
    connect (mapStateToProps, {getProfilePage,getStatus, updateStatus}),
)(ProfileContainer)