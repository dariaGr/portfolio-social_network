import './../../index.css'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faMessage,
  faMusic,
  faGear,
  faUsers,
  faEarthAmericas,
} from '@fortawesome/free-solid-svg-icons'

const Header = ({ isAuth, login, logoutUserData }) => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.headerMenu}>
          <li className={s.headerItem}>
            <NavLink to={'./profile'}>
              <FontAwesomeIcon icon={faUser} className={s.headerIcon} />
            </NavLink>
          </li>
          <li className={s.headerItem}>
            <NavLink to={'./dialogs'}>
              <FontAwesomeIcon icon={faMessage} className={s.headerIcon} />
            </NavLink>
          </li>
          <li className={s.headerItem}>
            <NavLink to={'./find-users'}>
              <FontAwesomeIcon icon={faUsers} className={s.headerIcon} />
            </NavLink>
          </li>
          <li className={s.headerItem}>
            <NavLink to={'./news'}>
              <FontAwesomeIcon
                icon={faEarthAmericas}
                className={s.headerIcon}
              />
            </NavLink>
          </li>
          <li className={s.headerItem}>
            <NavLink to={'./music'}>
              <FontAwesomeIcon icon={faMusic} className={s.headerIcon} />
            </NavLink>
          </li>
          <li className={s.headerItem}>
            <NavLink to={'./settings'}>
              <FontAwesomeIcon icon={faGear} className={s.headerIcon} />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={s.loginBlock}>
        {isAuth ? (
          <div>
            {login}{' '}
            <button
              className={cn(s.headerButton, 'button', 'buttonLight')}
              onClick={logoutUserData}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
