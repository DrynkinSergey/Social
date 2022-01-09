import React from 'react';
import classes from "./FormsControls.module.css";

const FormControl = ({input, meta,child, ...props}) => {
    const showError = meta.error && meta.touched;
    return (
        <div className={classes.formControl + ' ' + (showError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            <div>
                {showError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta,child, ...restProps}=props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
    }
export const Input = (props) => {
    const {input, meta,child, ...restProps}=props;
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}


