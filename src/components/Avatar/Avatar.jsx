import s from './Avatar.module.css';
import Ava from './../../assets/avatar.jpg';

const Avatar = ({customClass}) => {

    return (
        <img className={customClass ? customClass : s.img} src={Ava} alt="user's avatar" />
    );
};

export default Avatar;