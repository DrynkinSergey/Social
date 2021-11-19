import React from "react";
import Post from "./Post/Post";
const MyPosts = (props) => {
    let posts = props.profilePage.posts.map(post => <Post key={post.id} postText={post.postText} likesCount={post.likesCount} postTime={post.postTime} src={post.src}/>);

    return(
    posts
    )
}

export default MyPosts;