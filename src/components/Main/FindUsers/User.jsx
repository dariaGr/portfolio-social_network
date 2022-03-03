import { NavLink } from 'react-router-dom';
import s from './FindUsers.module.css';
import UserPhoto from './../../../assets/user.jpg';

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <>
            <div className={s.userCard}>
                <div className={s.column}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={s.userImg} src={user.photos.small != null ? user.photos.small : UserPhoto} alt="user-avatar" />
                    </NavLink>
                    {user.followed 
                    ? <button disabled={followingInProgress.some(id => id === user.id)} className={s.followButton} 
                    onClick={()=>{unfollow(user.id)}}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} className={s.followButton} 
                    onClick={()=>{follow(user.id)}}>Follow</button>
                    }
                </div>
                <div className={s.userContent}>
                    <div className={s.description}>
                        <div className={s.userName}>{user.name}</div>
                        <p className={s.userDesc}>{user.status}</p>
                    </div>
                    <div>
                        <div className={s.userCity}>{'user.location.city'},</div>
                        <div className={s.userCountry}>{'user.location.country'}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;