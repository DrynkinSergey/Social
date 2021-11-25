/*
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";

const mapStateToProps = (state) =>
{
    return{
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return{
        addPost: () => {
            dispatch(addPostActionCreator());

        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }


    }
}
const ProfileInfoContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer;*/

import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";

const mapStateToProps = (state) =>
{
    return{
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return{
        addPost: () => {
            dispatch(addPostActionCreator());

        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }


    }
}
const ProfileInfoContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer;
