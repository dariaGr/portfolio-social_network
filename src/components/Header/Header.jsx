import s from './Header.module.css';
import Logo from './../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <a href='#'><img src={Logo} /></a>
            </div>
            <div className={s.loginBlock}>
                {isAuth? login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;

