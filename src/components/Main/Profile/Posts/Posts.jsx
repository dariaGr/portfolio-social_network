import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = ({ state, dispatch }) => {
    const postElements = state.profilePage.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={s.posts}>
             <MyPosts dispatch={dispatch} state={state} />
            <div className={s.oldPosts}>
                {postElements}
            </div>
        </div>
    );
};

export default Posts;