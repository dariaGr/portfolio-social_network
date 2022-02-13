import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import store from './redux/store';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
       <React.StrictMode>
         <App state={state} store={store} />
       </React.StrictMode>,
       document.getElementById('root')
     );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
