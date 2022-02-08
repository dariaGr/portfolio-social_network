import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.newPost}>
            <h2>My posts</h2>
            <div>
                 <textarea placeholder='your news...'></textarea>
            </div>
            <div>
                 <button className={s.sendButton} type='submit'>Send</button>
            </div>
         </div>
    );
};

export default MyPosts;