import s from './Profile.module.css';
import ProfileBg from '../assets/profile-bg.jpg';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.background}>
                <img src={ProfileBg} />
            </div>
            <div className={s.content}>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>Post</div>
                    <div>Post</div>
                    <div>Post</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

