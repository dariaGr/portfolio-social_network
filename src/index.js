import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import store from './redux/store';
// import state, {addMessage, addPost, updateNewMessageText, updateNewPostText, subscribe} from './redux/state';

const rerenderEntireTree = () => {
    ReactDOM.render(
       <React.StrictMode>
         <App state={store.getState()} store={store} />
       </React.StrictMode>,
       document.getElementById('root')
     );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
