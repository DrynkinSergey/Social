import React from "react";
import s from "../../Navbar/Users/users.module.css";
import preloader from "../../../assets/images/preloader.svg";

let Preloader = () => {
    return (
        <div className={s.preloader}>
            <img style={{backgroundColor:"transparent"}} src={preloader}/>
            <h2>Идет загрузка данных</h2>
        </div>
    )
}

export default Preloader;