import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    const postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 17},
        {id: 2, message: 'My first post!', likesCount: 43},
    ]

    return (
        <div className={s.posts}>
             <MyPosts />
            <div className={s.oldPosts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>
    );
};

export default Posts;