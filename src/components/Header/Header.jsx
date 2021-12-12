import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    My Social Network
                </div>
                <div className={s.search}>
                    <input type="text" placeholder='Поиск...'/>
                </div>
                <div className={s.auth}>
                    {props.isAuth ? <span> {props.login} </span>
                        : <NavLink to={'/login'}>Войти</NavLink>
                    }
                    | <button>Зарегистрироваться</button>
                </div>

            </div>
        </header>
    );
}
export default Header;
