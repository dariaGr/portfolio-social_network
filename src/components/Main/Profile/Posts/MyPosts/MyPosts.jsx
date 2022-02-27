import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';

const MyPostsForm = props => {
     return (
          <form onSubmit={props.handleSubmit}>
               <div>
                    <Field component='textarea' placeholder='your news...' name='newPostText' />
               </div>
               <div>
                    <button className={s.sendButton}>Add post</button>
               </div>
          </form>
     );
};

const MyPosts = ({ addPost }) => {
     const addNewPost = (values) => {
          addPost(values.newPostText)
     }

     return (
        <div className={s.newPost}>
            <h2>My posts</h2>
            <MyPostsReduxForm onSubmit={addNewPost} />
         </div>
    );
};

const MyPostsReduxForm = reduxForm({form: 'myPosts'})(MyPostsForm);

export default MyPosts;