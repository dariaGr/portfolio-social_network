import Avatar from './../../../../common/Avatar/Avatar'
import s from './Post.module.css'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Post = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <div className={s.description}>
        <Avatar />
        <div className={s.post}>{message}</div>
      </div>
      <button className={cn(s.likeButton, 'button')}>
        <FontAwesomeIcon className={s.faLike} icon={faThumbsUp} />
        Like {likesCount}
      </button>
    </div>
  )
}

export default Post
