import React from "react";
import s from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Friends from "./Friends/Friends";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
    return (
        <div>
            <div className={s.profileWrapper}>
                <ProfileInfoContainer  />
                <div className={s.postsAndAboutWrapper}>
                    <div className={s.posts}>
                        <MyPosts />
                    </div>
                    <div className={s.about}>
                        <div className={s.aboutUser}>Web Developer</div>
                        <div className={s.aboutUser}>The Official Drynkin Sergey Social Page</div>
                        <div className={s.aboutUser}>
                            webDeveloper@gmail.com
                        </div>
                        <div className={`${s.aboutUser}`}>
                            <h2>Друзья</h2>
                            <hr/>
                            <div className={s.friends}>
                                <Friends/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;