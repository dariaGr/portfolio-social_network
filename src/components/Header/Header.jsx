import s from './Header.module.css';
import Logo from './../../assets/logo.jpg';

const Header = () => {
    return (
        <header className={s.header}>
            <a href='#'><img src={Logo} /></a>
        </header>
    );
};

export default Header;

