import React from "react";
import FriendsItem from "./FriendsItem";

const Friends = (props) =>
{
    let friends = props.profilePage.friends.map(friend => <FriendsItem src={friend.src} name={friend.name}/>)
    return friends
}

export default Friends;