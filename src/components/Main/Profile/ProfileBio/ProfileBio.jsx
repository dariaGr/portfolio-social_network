import Avatar from '../../../common/Avatar/Avatar';
import Loader from '../../../common/Loader/Loader';
import s from './ProfileBio.module.css';

const ProfileBio = (props) => {
    if (!props.profile) {
        return <Loader />
    }

    return (
        <div className={s.bio}>
            {props.profile.photos.large ? <img className={s.img} src={props.profile.photos.large} alt="avatar" /> : <Avatar /> }
            <div className={s.description}>
                <h1 className={s.name}>{props.profile.fullName}</h1>
               <ul className={s.list}>
                    <li><span>About me: </span>{props.profile.aboutMe}</li>
                    <li><span>Instagram: </span><a href='https://instagram.com/itkamasutra' target='_blank'>{props.profile.contacts.instagram}</a></li>
                    <li>{props.profile.lookingForAJob && 'Looking for a job'}</li>
                    <li>{props.profile.lookingForAJob && props.profile.lookingForAJobDescription}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileBio;