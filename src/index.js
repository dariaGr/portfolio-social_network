import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const rerenderEntireTree = () => {
    ReactDOM.render(
       <React.StrictMode>
         <Provider store={store}>
            <App /> 
         </Provider>
       </React.StrictMode>,
       document.getElementById('root')
     );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
  const state = store.getState();
  rerenderEntireTree(state);
});
 