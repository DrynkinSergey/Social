import React from "react";
import s from './users.module.css';
import axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });
    }
    return <div className={s.wrapper}>

        <div>
            <h1>Друзья</h1>
            <hr/>
            {
                props.users.map(user =>
                    <div className={s.userItem} key={user.id}>
                        <div>
                            {user.status ? <img className={s.img} src={user.imgSrc} alt=""/> :
                                <img className={s.img} src={user.statusOfline} alt=""/>}
                            <div className={s.info}><p className={s.userName}>{user.name}</p>
                                <p className={s.location}>'user.location.city, user.location.country'</p></div>
                        </div>
                        <div className={s.btn}>
                            {user.followed ? <button onClick={() => {
                                props.follow(user.id)
                            }}>Подписаться</button> : <button onClick={() => {
                                props.follow(user.id)
                            }}>Удалить</button>}
                        </div>
                    </div>
                )
            }
        </div>
        <div className={s.searchPanel}>
            Поиск
        </div>
    </div>

}
export default Users;