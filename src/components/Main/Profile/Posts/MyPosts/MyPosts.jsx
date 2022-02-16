import s from './MyPosts.module.css';

const MyPosts = ({ newPostText, updateNewPostText, addPost }) => {
     const handleClickPost = () => addPost();

     const handleChangePost = (e) => {
          const text = e.target.value;
          updateNewPostText(text);
     };

     return (
        <div className={s.newPost}>
            <h2>My posts</h2>
            <div>
                 <textarea onChange={handleChangePost} placeholder='your news...' value={newPostText}/>
            </div>
            <div>
                 <button className={s.sendButton} type='submit' onClick={handleClickPost}>Add post</button>
            </div>
         </div>
    );
};

export default MyPosts;