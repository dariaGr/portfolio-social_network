import s from './Avatar.module.css';
import Ava from './../../assets/avatar.jpg';

const Avatar = () => {
    return (
        <img className={s.img} src={Ava} alt="user's avatar" />
    );
};

export default Avatar;