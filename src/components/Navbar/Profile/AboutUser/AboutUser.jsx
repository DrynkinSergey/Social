import React from "react";
import s from "../profile.module.css";

let AboutUser = (props) => {
    return(
        <div>
                <div className={s.aboutUser}>Web Developer</div>
                <div className={s.aboutUser}>The Official Drynkin Sergey Social Page</div>
                <div className={s.aboutUser}>
                    webDeveloper@gmail.com
                </div>
        </div>
    )
}
export default AboutUser;