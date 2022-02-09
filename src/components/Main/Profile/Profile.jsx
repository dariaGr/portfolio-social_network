import s from './Profile.module.css';
import ProfileBg from './../../../assets/profile-bg.jpg';
import Posts from './Posts/Posts';
import ProfileBio from './ProfileBio/ProfileBio';

const Profile = ({ posts, addPost, newPostText, updateNewPostText }) => {
    return (
        <div className={s.profile}>
            <div className={s.background}>
                <img src={ProfileBg} />
            </div>
            <div className={s.content}>
                <ProfileBio />
                <Posts posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText} />
            </div>
        </div>
    );
};

export default Profile;

