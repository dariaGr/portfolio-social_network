import { addPost } from './../../../../redux/profileReducer'
import { connect } from 'react-redux'
import Posts from './Posts'

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: newPostText => {
      dispatch(addPost(newPostText))
    },
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
