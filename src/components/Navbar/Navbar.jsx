import React from "react";
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/Profile' activeClassName={s.active}>Профиль</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Dialogs' activeClassName={s.active}>Сообщения</NavLink>
                </div>
                <div className={s.item}>
                    <a href="#">Новости</a>
                </div>
                <div className={s.item}>
                    <a href="#">Музыка</a>
                </div>
                <div className={s.item}>
                    <a href="#">Настройки</a>
                </div>
            </nav>
            <nav className={s.nav}>


            </nav>
        </div>

    );
}
export default Navbar;