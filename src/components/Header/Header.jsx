import React from "react";
import s from './header.module.css';
const Header = () =>{
    return(
        <header className={s.header }>
            <div className={s.wrapper}>
                <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJltzNIbxo1JpysYmJBXidAL44qTkvXxzXw&usqp=CAU" alt=""/>
            <div className={s.search}>
                <input type="text" placeholder='Поиск'/>
            </div>
            <div className={s.auth}>
                Войти | Зарегистрироваться
            </div>

            </div>
        </header>
    );
}
export default Header;