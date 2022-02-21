import { addPost, updateNewPostText } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const PostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(Posts);

export default PostsContainer;