import Avatar from './../../../../common/Avatar/Avatar';
import s from './Post.module.css';

const Post = ({ message, likesCount }) => {
    return (
        <div className={s.item}>
            <div className={s.description}>
                <Avatar />
                <div className={s.post}>{message}</div>
            </div>
            <button className={s.likeButton}>like {likesCount}</button>
        </div>
    );
};

export default Post;
