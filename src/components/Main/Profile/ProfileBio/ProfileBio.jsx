import Avatar from './../../../common/Avatar/Avatar';
import Loader from './../../../common/Loader/Loader';
import s from './ProfileBio.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileBio = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Loader />
    }

    return (
        <div className={s.bio}>
            {profile.photos.large ? <img className={s.img} src={profile.photos.large} alt='avatar' /> : <Avatar /> }
            <div className={s.description}>
                <h1 className={s.name}>{profile.fullName}</h1>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
               <ul className={s.list}>
                    <li><span>About me: </span>{profile.aboutMe}</li>
                    <li><span>Instagram: </span><a href='https://instagram.com/itkamasutra' target='_blank'>{profile.contacts.instagram}</a></li>
                    <li>{profile.lookingForAJob && 'Looking for a job'}</li>
                    <li>{profile.lookingForAJob && profile.lookingForAJobDescription}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileBio;
