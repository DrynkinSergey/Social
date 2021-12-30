import React from "react";
import s from "../profile.module.css";

export default class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        status:this.props.status
    }
   activateEditMode =  () =>{
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode =  () =>{
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (event) => {
        this.setState({status: event.currentTarget.value})
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status!==this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        return(
            <div className={s.aboutUser}>
                {(!this.state.editMode)?<div  onDoubleClick={ this.activateEditMode}><span >{this.props.status}</span></div>
                    :<div ><input autoFocus={true} onChange={this.onStatusChange}   onBlur={ this.deactivateEditMode} value={this.state.status}/></div>
                }
            </div>
        )
    }
}
