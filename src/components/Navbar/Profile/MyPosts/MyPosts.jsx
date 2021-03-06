import React from "react";
import Post from "./Post/Post";
import s from '../profile.module.css'
const MyPosts = (props) => {
    let posts = props.profilePage.posts.map(post => <Post  profilePage={props.profilePage} key={post.id} postText={post.postText} likesCount={post.likesCount} postTime={post.postTime} src={post.src}/>);

    return <div className={s.posts}>{posts}</div>
}
export default MyPosts;
