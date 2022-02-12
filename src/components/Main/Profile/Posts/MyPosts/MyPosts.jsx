import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = ({ state, store }) => {
     const newPostElement = React.createRef();

     const handleClickPost = () => store.addPost();

     const handleChangePost = () => {
          const text = newPostElement.current.value;
          store.updateNewPostText(text);
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