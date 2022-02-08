import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import s from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={s.aside}>
            <nav className={s.nav}>
                <ul>
                    <li className={s.item}>
                        <NavLink to="/profile" className={(navigationData) => navigationData.isActive ? s.activeLink : null}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/dialogs" className={(navigationData) => navigationData.isActive ? s.activeLink : null}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/news" className={(navigationData) => navigationData.isActive ? s.activeLink : null}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/music" className={(navigationData) => navigationData.isActive ? s.activeLink : null}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/settings" className={(navigationData) => navigationData.isActive ? s.activeLink : null}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.friends}>
                <div>Friends</div>
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        </aside>
    );
};

export default Aside;

