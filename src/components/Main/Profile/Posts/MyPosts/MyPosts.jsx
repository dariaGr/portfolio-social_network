import React from 'react';
import s from './MyPosts.module.css';

const addPostActionCreator = () => {
     return {type: 'ADD_POST'};
};

const updateNewPostTextActionCreator = (text) => {
     return {type: "UPDATE_NEW_POST_TEXT", newText: text};
};

const MyPosts = ({ state, dispatch }) => {
     const newPostElement = React.createRef();

     const handleClickPost = () => dispatch(addPostActionCreator());

     const handleChangePost = () => {
          const text = newPostElement.current.value;
          dispatch(updateNewPostTextActionCreator(text));
     }

     return (
        <div className={s.newPost}>
            <h2>My posts</h2>
            <div>
                 <textarea ref={newPostElement} onChange={handleChangePost} placeholder='your news...' value={state.profilePage.newPostText}/>
            </div>
            <div>
                 <button className={s.sendButton} type='submit' onClick={handleClickPost}>Add post</button>
            </div>
         </div>
    );
};

export default MyPosts;