import s from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from './../../../../common/FormsControls/FormsControls'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const MyPostsForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.MyPostsFormTextarea}
          component={Textarea}
          placeholder='your news...'
          name='newPostText'
        />
      </div>
      <div>
        <button className={cn(s.sendButton, 'button')}>
          {' '}
          <FontAwesomeIcon className={s.faPencil} icon={faPencil} />
          post
        </button>
      </div>
    </form>
  )
}

const MyPosts = ({ addPost }) => {
  const addNewPost = values => {
    addPost(values.newPostText)
  }

  return (
    <div className={s.newPost}>
      <h2>My posts</h2>
      <MyPostsReduxForm onSubmit={addNewPost} />
    </div>
  )
}

const MyPostsReduxForm = reduxForm({ form: 'myPosts' })(MyPostsForm)

export default MyPosts
