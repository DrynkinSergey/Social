import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = (props) => {
    let state = props.store.getState();
    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) =>
    {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };
    return(
            <ProfileInfo newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} addPost={onAddPost}/>
    )
}

export default ProfileInfoContainer;