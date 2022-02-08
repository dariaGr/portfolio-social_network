import Post from './Post';
import s from './Posts.module.css';

const Posts = () => {
    return (
        <div className={s.posts}>
             <div className={s.newPost}>
                <h2>My posts</h2>
                <div>
                    <textarea placeholder='your news...'></textarea>
                </div>
                <div>
                    <button type='submit'>Send</button>
                </div>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default Posts;