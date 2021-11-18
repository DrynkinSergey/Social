import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/Post";
import storeContext from "../../../../storeContext";
const MyPosts = () => {
    return <storeContext.Consumer>
        {
            (store) => {
                let state = store.getState().profilePage;
                let posts = state.posts.map(post => <Post postText={post.postText}
                                                          likesCount={post.likesCount} postTime={post.postTime} src={post.src}/>);

                return posts
            }
        }



    </storeContext.Consumer>
}

export default MyPosts;