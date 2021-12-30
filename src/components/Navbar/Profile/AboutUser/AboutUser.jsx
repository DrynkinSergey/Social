import React from "react";
import s from "../profile.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

let AboutUser = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return(
        <div>
            <ProfileStatus updateStatus={props.updateStatus} status={props.status} />
            <div className={s.aboutUser}>{props.profile.aboutMe}
               </div>
                <div className={s.aboutUser}>The Official Drynkin Sergey Social Page</div>
                <div className={s.aboutUser}>
                    webDeveloper@gmail.com
                </div>
        </div>
    )
}
export default AboutUser;