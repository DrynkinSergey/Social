import React from "react";
import s from './friends.module.css';
import storeContext from "../../../../storeContext";
import FriendsItem from "./FriendsItem";

const Friends = () => {
    return <storeContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let friends = state.profilePage.friends.map(friend => <FriendsItem src={friend.src}
                                                                                   name={friend.name}/>)
                return friends


        }
        }
    </storeContext.Consumer>
}
export default Friends;