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
                    <Post message="hello" likesCount="1"/>
                    <Post message="hi" likesCount="231"/>
                    <Post message="Welcome" likesCount="3211"/>
                    <Post message="Welcome" likesCount="3211"/>
                    <Post message="Welcome" likesCount="3211"/>
                    <Post message="Welcome" likesCount="3211"/>
                    <Post message="Welcome" likesCount="3211"/>
                    <Post message="Welcome" likesCount="3211"/>
                    <Post message="Welcome" likesCount="3211"/>
                    <Post message="Welcome" likesCount="3211"/>
                    <Post message="what's up" likesCount="3211"/>
                </div>
            </div>

    );
}

export default MyPosts;