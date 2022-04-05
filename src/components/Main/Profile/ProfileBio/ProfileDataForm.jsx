import { reduxForm } from 'redux-form'
import {
  createField,
  Input,
  Textarea,
} from './../../../common/FormsControls/FormsControls'
import s from './ProfileBio.module.css'
import c from './../../Login/Login.module.css'
import cn from 'classnames'

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className={s.description}>
      <div>
        Looking for a job:{' '}
        {createField(
          'Looking for a job',
          'lookingForAJob',
          null,
          Input,
          'checkbox',
        )}
      </div>
      <div>
        My professional skills:{' '}
        {createField(
          'My professional skills',
          'lookingForAJobDescription',
          null,
          Textarea,
        )}
      </div>
      <div>About me: {createField('About me', 'aboutMe', null, Textarea)}</div>
      <div>
        <span>Contacts:</span>{' '}
        {Object.keys(profile.contacts).map(key => {
          if (key.startsWith('w') || key.startsWith('g')) {
            return (
              <div key={key} className={s.contacts}>
                <b>
                  {key}:{' '}
                  {createField(key, 'contacts.' + key, null, Input, 'text')}
                </b>
              </div>
            )
          }
        })}
      </div>
      {error && <div className={c.formSummaryError}>{error}</div>}
      <button className={cn(s.editInput, s.profileSaveButton)}>save</button>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'profileEdit' })(ProfileDataForm)

export default ProfileDataReduxForm
