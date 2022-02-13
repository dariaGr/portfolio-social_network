import React from 'react';
import s from './MyPosts.module.css';
import { addPostCreator, updateNewPostTextCreator } from '../../../../../redux/store';

const MyPosts = ({ state, dispatch }) => {
     const newPostElement = React.createRef();

     const handleClickPost = () => dispatch(addPostCreator());

     const handleChangePost = () => {
          const text = newPostElement.current.value;
          dispatch(updateNewPostTextCreator(text));
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