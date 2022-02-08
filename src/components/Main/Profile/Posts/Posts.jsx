import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    return (
        <div className={s.posts}>
             <MyPosts />
            <div className={s.oldPosts}>
                <Post message="Hi, how are you?" likesCount={17} />
                <Post message="My first post!" likesCount={43} />
            </div>
        </div>
    );
};

export default Posts;