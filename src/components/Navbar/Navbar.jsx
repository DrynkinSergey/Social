import React from "react";
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return(
        <div>
        <nav className={s.nav}>
            <div>
                <NavLink to='/Profile'>Профиль</NavLink>
            </div>
            <div>
                <NavLink to='/Dialogs' >Сообщения</NavLink>
            </div>
            <div>
                <a href="#">Новости</a>
            </div>
            <div>
                <a href="#">Музыка</a>
            </div>
            <div>
                <a href="#">Настройки</a>
            </div>
        </nav>
        </div>

    );
}
export default Navbar;