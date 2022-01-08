import React from "react";
import s from "../profile.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import PostAddReduxForm from "../PostForm";

const ProfileInfo = (props) => {
    const onSubmit = (formData)=> {
        props.addPost(formData.PostText);
    }

    if(!props.profile) {
        return <Preloader/>
    }
    return(
            <div className={s.profileWrapper}>
                <div className={s.mainPicture}>
                    {props.profile.photos.large ? <img className={s.img}
                          src={props.profile.photos.large}
                          alt=""/> : <img className={s.img}
                          src="https://www.techrepublic.com/a/hub/i/r/2021/03/08/3f6720de-e2a9-4213-b40f-1889436d92df/resize/1200x/694311317277dbe6af470ea7ea13b38e/monsitj.jpg"
                          alt=""/>}
                        </div>

                <div className={s.communicateUser}>
                    <div className={s.leftSide}>
                        <button className={s.btnCommunication}>Нравится</button>
                        <button className={s.btnCommunication}>Подписаться</button>
                        <button className={s.btnCommunication}>Поделиться</button>
                        <button  className={s.btnCommunication}>Создать пост</button>
                        <button className={s.btnCommunication}>...</button>
                    </div>
                    <div className={s.rightSide}>
                        <button className={s.btnSendMessage}>Сообщение</button>
                    </div>
                </div>
                <PostAddReduxForm onSubmit={onSubmit}/>
            </div>
    )
}

export default ProfileInfo;