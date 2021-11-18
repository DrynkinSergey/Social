import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


    ReactDOM.render(
        //.bind(store) добавляется для того, чтоб не терять обьект и контекст вызова. иначе метод вызовет props
       <BrowserRouter>
           <Provider store={store}>
           <App />
           </Provider>
       </BrowserRouter>,
        document.getElementById('root')
    );

