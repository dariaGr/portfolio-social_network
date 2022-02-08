import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 17},
        {id: 2, message: 'My first post!', likesCount: 43},
    ]

    const postElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={s.posts}>
             <MyPosts />
            <div className={s.oldPosts}>
                {postElements}
            </div>
        </div>
    );
};

export default Posts;