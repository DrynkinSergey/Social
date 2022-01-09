import React from 'react';
import s from "./profile.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
const maxLength = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}  validate={[required, maxLength]} name={"PostText"} id='ta'
                       className={s.createPost} placeholder={'enter text'}/>
            </div>
                <button className={s.btnCommunication}>Go</button>
        </form>
    );
};
const PostAddReduxForm = reduxForm({form: "addPost"})(PostForm)
export default PostAddReduxForm;
