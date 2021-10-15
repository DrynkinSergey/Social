import React from "react";
import s from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return(
        <div >
            <div className={s.profileWrapper}>
               <div className={s.mainPicture}>
                   <img  className={s.img}
                         src="https://www.techrepublic.com/a/hub/i/r/2021/03/08/3f6720de-e2a9-4213-b40f-1889436d92df/resize/1200x/694311317277dbe6af470ea7ea13b38e/monsitj.jpg"
                         alt=""/>
               </div>
                <div className={s.communicateUser}>
                    <div className={s.leftSide}>

                    </div>
                    <div className={s.rightSide}>
                        <button>Сообщение</button>
                    </div>
                </div>





            <MyPosts/>

        </div>
        </div>

    );
}
export default Profile;