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
                                     onClick={() => {
                                         props.onPageChanged(page)
                                     }}> <span className={s.pageNum}>{page}</span> </span>
                    })}
                    {
                        props.users.map(user =>
                            <div className={s.userItem} key={user.id}>
                                <div>
                                    {user.status ?
                                        <NavLink to={'Profile/' + user.id}>
                                            <img className={s.img} src={user.photos.small} alt=""/>
                                        </NavLink>
                                        :
                                        <NavLink to={'Profile/' + user.id}>
                                            <img className={s.img}
                                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJI-OEIhwP1mEqO7SIM0KXeEYhU1NrOt84pM8XkESjzN8AxkBtEjlDBVz4iooBxSV9zzY&usqp=CAU"
                                                 alt=""/>
                                        </NavLink>}
                                    <div className={s.info}><p className={s.userName}>{user.name}</p>
                                        <p className={s.location}>{user.status}</p></div>
                                </div>
                                <div className={s.btn}>
                                    {!user.followed ?
                                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                onClick={() => {
                                                    props.follow(user.id)
                                                }
                                                }>Подписаться</button>
                                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      {
                                                          props.unfollow(user.id)
                                                      }
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