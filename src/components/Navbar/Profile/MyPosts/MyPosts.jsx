import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts.map(post => <Post postText={post.postText}
                                              likesCount={post.likesCount} postTime={post.postTime} src={post.src}/>);
    return (
        <div>
            {posts}
        </div>
    );
}

export default MyPosts;