import s from './Profile.module.css';
import ProfileBg from './../../../assets/profile-bg.jpg';
import Posts from './Posts/Posts';
import ProfileBio from './ProfileBio/ProfileBio';

const Profile = ({ posts }) => {
    return (
        <div className={s.profile}>
            <div className={s.background}>
                <img src={ProfileBg} />
            </div>
            <div className={s.content}>
                <ProfileBio />
                <Posts posts={posts} />
            </div>
        </div>
    );
};

export default Profile;

