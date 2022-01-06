import React from 'react';
import s from "./profile.module.css";
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {


    let onPostChange = (formData) =>
    {
        props.updateNewPostText(formData.currentTarget.value);
    };
    return (
        <form onSubmit={props.handleSubmit}>
            {/*{alert(props.newPostText)}*/}
            <Field component={"textarea"} name={"PostText"} id='ta'
                   onChange={onPostChange} className={s.createPost} placeholder={props.newPostText} />
        </form>
    );
};
const PostAddReduxForm = reduxForm({form:"addPost"})(PostForm)
export default PostAddReduxForm;
