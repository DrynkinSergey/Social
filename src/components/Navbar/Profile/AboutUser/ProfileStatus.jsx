import React from "react";
import s from "../profile.module.css";
import Preloader from "../../../common/Preloader/Preloader";

export default class ProfileStatus extends React.Component {
    state = {
        editMode:false
    }
   activateEditMode =  () =>{
        this.setState({
            editMode:!this.state.editMode
        })
    }

    render() {
        return(
            <div className={s.aboutUser}>
                {(!this.state.editMode)?<div onDoubleClick={ this.activateEditMode}><span >{this.props.status}</span></div>
                    :<div ><input autoFocus={true} onBlur={ this.activateEditMode} value={this.props.status}/></div>
                }

            </div>
        )
    }
}
