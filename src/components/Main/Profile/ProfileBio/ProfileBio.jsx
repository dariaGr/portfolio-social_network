import Avatar from './../../../common/Avatar/Avatar';
import Loader from './../../../common/Loader/Loader';
import s from './ProfileBio.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileBio = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    const goToEditMode = () => {
        setEditMode(true)
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        };
    };

    const handleSubmit = formData => {
        saveProfile(formData)
        .then(()=>{
            setEditMode(false);
        });
    };

    if (!profile) {
        return <Loader />
    };

    return (
        <div className={s.bio}>
            {profile.photos.large ? <img className={s.img} src={profile.photos.large} alt='avatar' /> : <Avatar /> }
            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            {editMode ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={handleSubmit}/> : 
            <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode} />}
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode={goToEditMode}}) => {
    return (
        <div className={s.description}>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
            <h1 className={s.name}>{profile.fullName}</h1>
            <ul className={s.list}>
                <li>About me: {profile.aboutMe}</li>
                <li>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</li>
                {profile.lookingForAJob &&<li>My professional skills: {profile.lookingForAJobDescription}</li>}
                <li>
                    <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </li>
            </ul>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    );
};

export default ProfileBio;
