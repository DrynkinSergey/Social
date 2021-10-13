import React from "react";
import s from './navbar.module.css';

const Navbar = () =>{
    return(
        <div>
        <nav className={s.nav}>
            <div>
                <a href="#">Профиль</a>
            </div>
            <div>
                <a href="#">Сообщения</a>
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