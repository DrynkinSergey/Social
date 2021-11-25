import React from "react";
import s from './profile.module.css';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import AboutUser from "./AboutUser/AboutUser";

const Profile = (props) => {
    return (
            <div className={s.profileWrapper}>
                <ProfileInfoContainer/>
                <div className={s.postsAndAboutWrapper}>
                    <div className={s.posts}>
                        <MyPostsContainer/>
                    </div>
                    <div>
                        <AboutUser/>
                        <FriendsContainer/>
                    </div>
                </div>
            </div>
            );
}
export default Profile;
