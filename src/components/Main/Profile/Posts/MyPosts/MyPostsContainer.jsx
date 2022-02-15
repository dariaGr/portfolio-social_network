import { addPostCreator, updateNewPostTextCreator } from '../../../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ dispatch }) => {
     const handleClickPost = () => dispatch(addPostCreator());

     const handleChangePost = (text) => {
          dispatch(updateNewPostTextCreator(text));
     };

     return (
        <MyPosts updateNewPostText={handleChangePost} addPost={handleClickPost} />
    );
};

export default MyPostsContainer;