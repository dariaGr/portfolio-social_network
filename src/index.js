import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

const rerenderEntireTree = () => {
    ReactDOM.render(
       <React.StrictMode>
         <StoreContext.Provider value={store}>
            <App /> 
         </StoreContext.Provider>
       </React.StrictMode>,
       document.getElementById('root')
     );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
  const state = store.getState();
  rerenderEntireTree(state);
});
 