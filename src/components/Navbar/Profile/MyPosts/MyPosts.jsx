import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return(

            <div>My Posts
                <div>
                    <textarea name="" id="" cols="20" rows="3"></textarea>
                </div>
                <button>Add new post</button>

                <div>
                    <Post message="hello"/>
                    <Post message="hi"/>
                    <Post message="Welcome"/>
                    <Post message="what's up"/>
                </div>
            </div>

    );
}

export default MyPosts;