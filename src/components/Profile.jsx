import s from './Profile.module.css';
import ProfileBg from '../assets/profile-bg.jpg';
import Posts from './Posts';
import ProfileBio from './ProfileBio';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.background}>
                <img src={ProfileBg} />
            </div>
            <div className={s.content}>
                <ProfileBio />
                <Posts />
            </div>
        </div>
    );
};

export default Profile;

