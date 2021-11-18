import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import storeContext from "../../../../storeContext";

const ProfileInfoContainer = (props) => {
    return  <storeContext.Consumer>
            {
                (store) => {
                let state = store.getState();
                let onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) =>
                {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <ProfileInfo newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange}
                             addPost={onAddPost}/>
            }
            }
        </storeContext.Consumer>

}

export default ProfileInfoContainer;