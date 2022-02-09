import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
     const newPostElement = React.createRef();

     const appPost = () => {
          const text = newPostElement.current.value;
          alert(text);
     };

    return (
        <div className={s.newPost}>
            <h2>My posts</h2>
            <div>
                 <textarea ref={newPostElement} placeholder='your news...'></textarea>
            </div>
            <div>
                 <button className={s.sendButton} type='submit' onClick={appPost}>Add post</button>
            </div>
         </div>
    );
};

export default MyPosts;