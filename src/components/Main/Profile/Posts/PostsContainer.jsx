import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostCreator()),
        updateNewPostText: (text) => dispatch(updateNewPostTextCreator(text))
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;