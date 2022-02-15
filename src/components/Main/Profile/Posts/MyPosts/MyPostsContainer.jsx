import { addPostCreator, updateNewPostTextCreator } from '../../../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ store, state }) => {
     const handleClickPost = () => store.dispatch(addPostCreator());

     const handleChangePost = (text) => store.dispatch(updateNewPostTextCreator(text));

     return (
        <MyPosts updateNewPostText={handleChangePost} addPost={handleClickPost} state={state} />
    );
};

export default MyPostsContainer;