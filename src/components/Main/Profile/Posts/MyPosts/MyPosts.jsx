import s from './MyPosts.module.css';
import { addPostCreator, updateNewPostTextCreator } from '../../../../../redux/profileReducer';

const MyPosts = ({ state, dispatch }) => {
     const handleClickPost = () => dispatch(addPostCreator());

     const handleChangePost = (e) => {
          const text = e.target.value;
          dispatch(updateNewPostTextCreator(text));
     }

     return (
        <div className={s.newPost}>
            <h2>My posts</h2>
            <div>
                 <textarea onChange={handleChangePost} placeholder='your news...' value={state.profilePage.newPostText}/>
            </div>
            <div>
                 <button className={s.sendButton} type='submit' onClick={handleClickPost}>Add post</button>
            </div>
         </div>
    );
};

export default MyPosts;