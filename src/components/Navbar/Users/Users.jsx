import React from "react";
import s from './users.module.css';
import axios from "axios";
import {setCurrentPageAC} from "../../../Redux/users-reducer";

class Users extends React.Component {

    componentDidMount() {
        axios.get(  `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.totalUsersCount}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(  `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count=${this.props.totalUsersCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        console.log(pageCount);
        let pages = [];
        for (let i = 0; i<pageCount;i++){
            pages.push(i+1);
        }
        return <div className={s.wrapper}>
            <div>
                <h1>Друзья</h1>
                <hr/>

                { pages.map(page => {
                   return <span className={this.props.currentPage === page && s.selectedPage}
                   onClick={(e) => {this.onPageChanged(page)}}> <span className={s.pageNum}>{page}</span> </span>
                })}
                {
                    this.props.users.map(user =>
                        <div className={s.userItem} key={user.id}>
                            <div>
                                {user.status ? <img className={s.img} src={user.photos.small} alt=""/> :
                                    <img className={s.img} src={user.statusOfline} alt=""/>}
                                <div className={s.info}><p className={s.userName}>{user.name}</p>
                                    <p className={s.location}>'user.location.city, user.location.country'</p></div>
                            </div>
                            <div className={s.btn}>
                                {user.followed ? <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Подписаться</button> : <button onClick={() => {
                                    this.props.follow(user.id)
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
}

export default Users;