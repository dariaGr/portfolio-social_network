import s from './Posts.module.css';
import Post from './Post/Post';
import MyPosts from './MyPosts/MyPosts';

const Posts = ({ posts, newPostText, updateNewPostText, addPost }) => {
    const postElements = posts.map( post => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);

    return (
        <div className={s.posts}>
             <MyPosts updateNewPostText={updateNewPostText} 
            addPost={addPost} newPostText={newPostText} />
            <div className={s.oldPosts}>
                {postElements}
            </div>
        </div>
    );
};

export default Posts;
