import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import store from './redux/redux-store';

const rerenderEntireTree = () => {
    ReactDOM.render(
       <React.StrictMode>
         <App store={store}/>
       </React.StrictMode>,
       document.getElementById('root')
     );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
  const state = store.getState();
  rerenderEntireTree(state);
});
 