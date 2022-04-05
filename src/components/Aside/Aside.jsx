import ProfileContainer from '../Main/Profile/ProfileContainer'
import Avatar from './../common/Avatar/Avatar'
import s from './Aside.module.css'

const Aside = () => {
  return (
    <aside className={s.aside}>
      <ProfileContainer />
      <div className={s.friends}>
        <div>Friends</div>
        <div className={s.friendsAvatar}>
          <Avatar customClass={s.imgAside} />
          <Avatar customClass={s.imgAside} />
          <Avatar customClass={s.imgAside} />
          <Avatar customClass={s.imgAside} />
        </div>
      </div>
    </aside>
  )
}

export default Aside
