import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from './../../../common/FormsControls/FormsControls';
import s from './ProfileBio.module.css'
import c from './../../Login/Login.module.css';

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.description}>
            <button>save</button>
            {createField('Name', 'fullName', null, Input, 'text')}
                <div>Looking for a job:  {createField('Looking for a job', 'lookingForAJob', null, Input, 'checkbox')}</div>
                <div>My professional skills: {createField('My professional skills', 'lookingForAJobDescription', null, Textarea)}</div>
                <div>About me: {createField('About me', 'aboutMe', null, Textarea)}</div>
                <div>
                    <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key} className={s.contacts}>
                                <b>{key}: {createField(key, 'contacts.' + key, null, Input, 'text')}</b>
                            </div>
                        )
                    })}
                </div>
            {error && <div className={c.formSummaryError}>{error}</div>}
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'profileEdit'})(ProfileDataForm)

export default ProfileDataReduxForm;