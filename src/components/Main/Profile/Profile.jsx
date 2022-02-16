import s from './Profile.module.css';
import ProfileBg from './../../../assets/profile-bg.jpg';
import PostsContainer from './Posts/PostsContainer';
import ProfileBio from './ProfileBio/ProfileBio';

const Profile = ({ store }) => {
    return (
        <div className={s.profile}>
            <div className={s.background}>
                <img src={ProfileBg} />
            </div>
            <div className={s.content}>
                <ProfileBio />
                <PostsContainer store={store} />
            </div>
        </div>
    );
};

export default Profile;

