import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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

ReactDOM.render(
    <App postData={postData}/>,
  document.getElementById('root')
);

