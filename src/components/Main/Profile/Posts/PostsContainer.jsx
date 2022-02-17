import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../StoreContext';
import Posts from './Posts';

const PostsContainer = () => {
    return (
        <StoreContext.Consumer> 
            {store => {
                const state = store.getState();
                const handleClickPost = () => store.dispatch(addPostCreator());
                const handleChangePost = text => store.dispatch(updateNewPostTextCreator(text));
                
                return (
                    <Posts 
                        posts={state.profilePage.posts} 
                        updateNewPostText={handleChangePost} 
                        addPost={handleClickPost} 
                        newPostText={state.profilePage.newPostText} 
                    />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default PostsContainer;