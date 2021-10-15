import React from "react";
import s from './header.module.css';
const Header = () =>{
    return(
        <header className={s.header }>
            <div className={s.wrapper}>
                <div  className={s.img} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJltzNIbxo1JpysYmJBXidAL44qTkvXxzXw&usqp=CAU" alt=""/>
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