import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = ({ posts, addPost, newPostText, updateNewPostText }) => {
    const postElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={s.posts}>
             <MyPosts addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText} />
            <div className={s.oldPosts}>
                {postElements}
            </div>
        </div>
    );
};

export default Posts;