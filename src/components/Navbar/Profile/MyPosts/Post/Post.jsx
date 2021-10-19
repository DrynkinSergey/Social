import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (

        <div className={s.post}>
            <img className={s.avatar} src="https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg"
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