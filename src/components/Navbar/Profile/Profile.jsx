import React from "react";
import s from './profile.module.css';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import AboutUser from "./AboutUser/AboutUser";
import MyPosts from "./MyPosts/MyPosts";
import Friends from "./Friends/Friends";

const Profile = (props) => {

    return (
            <div className={s.profileWrapper}>
                <ProfileInfoContainer profile={props.profile}/>
                <div className={s.postsAndAboutWrapper}>
                    <div className={s.posts}>
                        <MyPosts profilePage={props.profilePage}/>
                    </div>
                    <div>
                        <AboutUser status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
                        <Friends friends={props.friends}/>
                    </div>
                </div>
            </div>
            );
}
export default Profile;
