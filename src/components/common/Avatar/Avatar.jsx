import s from './Avatar.module.css'
import User from './../../../assets/friend.jpg'

const Avatar = ({ customClass }) => {
  return (
    <img
      className={customClass ? customClass : s.img}
      src={User}
      alt={`user's avatar`}
    />
  )
}

export default Avatar
