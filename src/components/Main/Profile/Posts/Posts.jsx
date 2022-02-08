import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    return (
        <div className={s.posts}>
             <MyPosts />
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default Posts;