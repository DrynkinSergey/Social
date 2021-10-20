import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from "./Redux/state";
import {addPost} from "./Redux/state";
/*

let postData = [
    {postText:"Создание страницы профиля почти готово",
        likesCount:'112,292',
        postTime:1,
        src:"https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/293/879/9.jpg" },
    {postText:"Реакт это афигенная вещь!",
        likesCount:'11,292',
        postTime:2,
        src:"https://bilberrys.ru/wp-content/uploads/2019/10/00212.png" },
    {postText:"Я понял как создавать посты на странице",
        likesCount:'2,292',
        postTime:4,
        src:"https://xakep.ru/wp-content/uploads/2015/05/func1.jpg" },
    {postText:"Я понял как создавать посты на странице",
        likesCount:'2,292',
        postTime:11,
        src:"https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg" },
    {postText:"This is my first post on page",
        likesCount:'1,292',
        postTime:15,
        src:"https://senior.ua/storage/article/content/4c87f7c1-6bb1-4831-98e7-f926b547ee48.jpeg" }
]

/!*Создаем массив диалогов*!/
let dialogsData = [
    {id: 1, name: 'Сергей'},
    {id: 2, name: 'Настя'},
    {id: 3, name: 'Алиса'},
    {id: 4, name: 'Алена'},
    {id: 5, name: 'Толик'}
]
/!*Создаем массив сообщений*!/
let messagesData = [
    {id: 1, message: '1'},
    {id: 2, message: '2'},
    {id: 3, message: '3'},
    {id: 4, message: '4'},
    {id: 5, message: '5'},
]
*/


ReactDOM.render(
    <App state={state} addPost={addPost}/>,
  document.getElementById('root')
);

