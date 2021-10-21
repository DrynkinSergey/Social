import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import {addPost} from "./Redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}