import React from "react";
import s from "../profile.module.css";

const ProfileInfo = (props) => {
    let newElementPost = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () =>
    {
        let text = newElementPost.current.value;
        props.updateNewPostText(text);

    };
    return(
        <div>

            <div className={s.profileWrapper}>
                <div className={s.mainPicture}>
                    <img className={s.img}
                         src="https://www.techrepublic.com/a/hub/i/r/2021/03/08/3f6720de-e2a9-4213-b40f-1889436d92df/resize/1200x/694311317277dbe6af470ea7ea13b38e/monsitj.jpg"
                         alt=""/>
                </div>
                <div className={s.communicateUser}>
                    <div className={s.leftSide}>
                        <button className={s.btnCommunication}>Нравится</button>
                        <button className={s.btnCommunication}>Подписаться</button>
                        <button className={s.btnCommunication}>Поделиться</button>
                        <button onClick={ addPost } className={s.btnCommunication}>Создать пост</button>
                        <button className={s.btnCommunication}>...</button>
                    </div>
                    <div className={s.rightSide}>
                        <button className={s.btnSendMessage}>Сообщение</button>
                    </div>
                </div>
                <form action=""><textarea id='ta' ref={newElementPost} onChange={onPostChange} className={s.createPost} value={props.newPostText}/>
                </form>
            </div>
            </div>
    )
}

export default ProfileInfo;