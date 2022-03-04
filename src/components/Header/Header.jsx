import s from './Header.module.css';
import Logo from './../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, login, logoutUserData}) => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <a href='#'><img src={Logo} /></a>
            </div>
            <div className={s.loginBlock}>
                {isAuth
                ? 
                <div>{login} <button onClick={logoutUserData}>Log out</button></div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
