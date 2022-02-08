import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = ({name, id}) => {
    const path = `/dialogs/${id}`
    return (
        <li className={s.item}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
};

export default DialogItem;