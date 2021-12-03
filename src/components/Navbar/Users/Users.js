import React from "react";
import s from "./users.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }
    return (
        <div className={s.wrapper}>
            {props.isFetching ? <Preloader/> :
                <div>
                    <h1>Друзья</h1>
                    <hr/>
                    {pages.map(page => {
                        return <span className={props.currentPage === page && s.selectedPage}
                                     onClick={(e) => {
                                         props.onPageChanged(page)
                                     }}> <span className={s.pageNum}>{page}</span> </span>
                    })}
                    {
                        props.users.map(user =>
                            <div className={s.userItem} key={user.id}>
                                <div>
                                    {user.status ?
                                        <NavLink to={'Profile/'+user.id}>
                                        <img className={s.img} src={user.photos.small} alt=""/>
                                        </NavLink>
                                            :
                                      <NavLink to={'Profile/'+user.id}>
                                          <img className={s.img} src={user.statusOfline} alt=""/>
                                      </NavLink>  }
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
                </div>}
            <div className={s.searchPanel}>
                Поиск
            </div>
        </div>
    )
}
export default Users;