import React from "react";
import s from "./Post.module.css";
import Preloader from "../../../../common/Preloader/Preloader";

const Post = (props) => {

    if(!props.profilePage.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.post}>
            <img className={s.avatar} src={props.profilePage.profile.photos.small ||  "https://www.techrepublic.com/a/hub/i/r/2021/03/08/3f6720de-e2a9-4213-b40f-1889436d92df/resize/1200x/694311317277dbe6af470ea7ea13b38e/monsitj.jpg"}
                 alt=""/>
            <div className={s.userName}>{props.profilePage.profile.fullName}</div>
            <div className={s.timeOfPost}>{props.postTime}hr</div>
            <div className={s.postText}>{props.postText}</div>
            <div>
                <img className={s.postImage} src={props.src } alt=""/>
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