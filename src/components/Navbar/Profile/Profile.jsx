import React from "react";
import s from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Friends from "./Friends/Friends";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";




const Profile = (props) => {
    let addPost = React.createRef();
    let onBtnClick = () => {
        let text = props.state.newPostText;
        props.dispatch(addPostActionCreator());
        addPost.current.value='';

    }
    let onPostChange = () =>
    {
        let text = addPost.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    let friends = props.state.friends.map(friend => <Friends src={friend.src} name={friend.name}/>)
    return (
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
                        <button onClick={ onBtnClick } className={s.btnCommunication}>Создать пост</button>
                        <button className={s.btnCommunication}>...</button>
                    </div>
                    <div className={s.rightSide}>
                        <button className={s.btnSendMessage}>Сообщение</button>
                    </div>
                </div>
                <textarea ref={addPost} onChange={onPostChange} className={s.createPost} value={props.state.newPostText}/>

                <div className={s.postsAndAboutWrapper}>
                    <div className={s.posts}>
                        <MyPosts posts={props.state.posts}/>
                    </div>
                    <div className={s.about}>
                        <div className={s.aboutUser}>Web Developer</div>
                        <div className={s.aboutUser}>The Official Drynkin Sergey Social Page</div>
                        <div className={s.aboutUser}>
                            webDeveloper@gmail.com
                        </div>
                        <div className={`${s.aboutUser}`}>
                            <h2>Друзья</h2>
                            <hr/>
                            <div className={s.friends}>
                                {friends}
                                </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Profile;