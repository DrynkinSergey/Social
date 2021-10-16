import React from "react";
import s from './header.module.css';
const Header = () =>{
    return(
        <header className={s.header }>
            <div className={s.wrapper}>
                <div  className={s.logo} >
                    My Social Network
                </div>
            <div className={s.search}>
                <input type="text" placeholder='Поиск...'/>
            </div>
            <div className={s.auth}>
                <button>Войти</button> | <button>Зарегистрироваться</button>
            </div>

            </div>
        </header>
    );
}
export default Header;