import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { addMessage } from './redux/state';
import { updateNewMessageText } from './redux/state';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
