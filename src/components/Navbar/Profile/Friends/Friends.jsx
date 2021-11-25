import React from "react";
import FriendsItem from "./FriendsItem";
import s from "../profile.module.css";

const Friends = (props) =>
{

    let friends = props.profilePage.friends.map(friend => <FriendsItem key={friend.id} src={friend.src} name={friend.name}/>)
    return (
        <div className={s.aboutUser}>
            <h2>Друзья             <hr/>
            </h2>
            <div className={s.friends}>            {friends}
            </div>
        </div>
)
}

export default Friends;