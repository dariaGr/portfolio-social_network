import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/profileReducer';
import Posts from './Posts';

const PostsContainer = ({ store }) => {
     const state = store.getState();

     const handleClickPost = () => store.dispatch(addPostCreator());

     const handleChangePost = (text) => store.dispatch(updateNewPostTextCreator(text));

     return (
         <>
            <Posts posts={state.profilePage.posts} updateNewPostText={handleChangePost} 
            addPost={handleClickPost} newPostText={state.profilePage.newPostText} />
         </>
    );
};

export default PostsContainer;