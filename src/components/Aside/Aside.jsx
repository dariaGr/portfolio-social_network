import s from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={s.aside}>
            <nav className={s.nav}>
                <ul>
                    <li className={`${s.item} ${s.active}`}>
                        <a>Profile</a>
                    </li>
                    <li className={s.item}>
                        <a>Messages</a>
                    </li>
                    <li className={s.item}>
                        <a>News</a>
                    </li>
                    <li className={s.item}>
                        <a>Music</a>
                    </li>
                    <li className={s.item}>
                        <a>Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;

