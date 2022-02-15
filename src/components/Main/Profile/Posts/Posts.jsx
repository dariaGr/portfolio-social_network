import MyPostsContainer from './MyPosts/MyPostsContainer';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = ({ state, store }) => {
    const postElements = state.profilePage.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={s.posts}>
             <MyPostsContainer store={store} state={state} />
            <div className={s.oldPosts}>
                {postElements}
            </div>
        </div>
    );
};

export default Posts;