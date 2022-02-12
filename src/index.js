import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import store, { state } from './redux';
// import state, {addMessage, addPost, updateNewMessageText, updateNewPostText, subscribe} from './redux/state';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
       <React.StrictMode>
         <App state={state} store={store} />
       </React.StrictMode>,
       document.getElementById('root')
     );
}

rerenderEntireTree(state);

store.subscribe(rerenderEntireTree);