import React from "react";
import s from "./Post.module.css";
import Preloader from "../../../../common/Preloader/Preloader";

const Post = (props) => {

    if(!props.profilePage.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.post}>
            <img className={s.avatar} src={props.profilePage.profile.photos.small}
                 alt=""/>
            <div className={s.userName}>Drynkin Sergey</div>
            <div className={s.timeOfPost}>{props.postTime}hr</div>
            <div className={s.postText}>{props.postText}</div>
            <div>
                <img className={s.postImage} src={props.src} alt=""/>
            </div>

            <hr/>
            <button className={s.postBtn}>Нравится</button>
            <button className={s.postBtn}>Комментировать</button>
            <hr/>

            <div className={s.count}>Нравится: <span className={s.count}>{props.likesCount}</span></div>

        </div>

    );
}

export default Post;