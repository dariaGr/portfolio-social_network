import Avatar from './../../../common/Avatar/Avatar'
import Loader from './../../../common/Loader/Loader'
import s from './ProfileBio.module.css'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
import { useState } from 'react'
import ProfileDataReduxForm from './ProfileDataForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

const ProfileBio = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false)

  const goToEditMode = () => {
    setEditMode(true)
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const handleSubmit = formData => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  if (!profile) {
    return <Loader />
  }

  return (
    <div className={s.bio}>
      <div className={s.bioTop}>
        <h2>My Profile</h2>
        {profile.photos.large ? (
          <img className={s.img} src={profile.photos.large} alt='avatar' />
        ) : (
          <Avatar />
        )}
        {isOwner && (
          <div>
            <label htmlFor='file-upload' className={s.editInput}>
              Upload
            </label>
            <input
              id='file-upload'
              type='file'
              onChange={onMainPhotoSelected}
            />
          </div>
        )}
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      {editMode ? (
        <ProfileDataReduxForm
          initialValues={profile}
          profile={profile}
          onSubmit={handleSubmit}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={goToEditMode}
        />
      )}
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode = { goToEditMode } }) => {
  return (
    <div className={s.description}>
      {/* <h1 className={s.name}>{profile.fullName}</h1> */}
      <ul className={s.list}>
        {/* <li>
          <FontAwesomeIcon icon={faPencil} /> {profile.aboutMe}
        </li> */}
        <li>
          <span>Looking for a job: &nbsp; </span>
          {profile.lookingForAJob ? 'yes' : 'no'}
        </li>
        {profile.lookingForAJob && (
          <li>
            <span>My professional skills:</span> <br />
            {profile.lookingForAJobDescription}
          </li>
        )}
        <li>
          {Object.keys(profile.contacts).map(key => {
            if (key.startsWith('w') || key.startsWith('g')) {
              return (
                <Contact
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}
                />
              )
            }
          })}
        </li>
      </ul>
      {isOwner && (
        <button
          className={cn(s.editInput, s.ProfileEditButton)}
          onClick={goToEditMode}>
          edit
        </button>
      )}
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <span className={s.contactTitle}>{contactTitle}:</span>
      <br />
      {contactValue}
    </div>
  )
}

export default ProfileBio
