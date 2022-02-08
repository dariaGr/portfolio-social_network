import s from './Header.module.css';
import Logo from './../../assets/logo.png';

const Header = () => {
    return (
        <header className={s.header}>
            <a href='#'><img src={Logo} /></a>
        </header>
    );
};

export default Header;

