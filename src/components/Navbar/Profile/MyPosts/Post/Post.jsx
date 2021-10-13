import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return(

        <div className={s.post}>
            <img className={s.avatar} src="https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg" alt=""/>
            {props.message}
            <div>likes: <span className={s.count}>{props.likesCount}</span></div>
        
        </div>

    );
}

export default Post;