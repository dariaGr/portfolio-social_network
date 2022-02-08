import Avatar from './../../../../Avatar/Avatar';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <div className={s.description}>
                <Avatar />
                <div className={s.post}>Post's text</div>
            </div>
            <div>like</div>
        </div>
    );
};

export default Post;