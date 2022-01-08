import React from 'react';
import s from "./profile.module.css";
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"PostText"} id='ta'
                       className={s.createPost} placeholder={props.newPostText}/>
            </div>
                <button className={s.btnCommunication}>Go</button>
        </form>
    );
};
const PostAddReduxForm = reduxForm({form: "addPost"})(PostForm)
export default PostAddReduxForm;
