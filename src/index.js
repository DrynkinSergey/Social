import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import storeContext from "./storeContext";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        //.bind(store) добавляется для того, чтоб не терять обьект и контекст вызова. иначе метод вызовет props
       <BrowserRouter>
           <storeContext.Provider value={store}>
           <App />
           </storeContext.Provider>
       </BrowserRouter>,
        document.getElementById('root')
    );
}
/*
* Рендерим весь ДОМ, отдаем в Store функцию рендера через сабскрайб
* */
rerenderEntireTree(store.getState());
store.subscribe(() => {
    /*Прокидываем стейт через гет стор и отдаем его в функцию рендера*/
    let state = store.getState();
    rerenderEntireTree(state);
});