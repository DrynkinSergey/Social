import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import store from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        //.bind(store) добавляется для того, чтоб не терять обьект и контекст вызова. иначе метод вызовет props
       <BrowserRouter>
           <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
       </BrowserRouter>,
        document.getElementById('root')
    );
}
/*
* Рендерим весь ДОМ, отдаем в Store функцию рендера через сабскрайб
* */
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);