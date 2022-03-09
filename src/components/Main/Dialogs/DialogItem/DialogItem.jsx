import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'
import ProfilePic from './../../../../assets/profile-pic.jpg'

const DialogItem = ({ name, id }) => {
  const path = `/dialogs/${id}`
  return (
    <li className={s.item}>
      <NavLink to={path}>
        <img src={ProfilePic} alt='avatar' />
        {name}
      </NavLink>
    </li>
  )
}

export default DialogItem
