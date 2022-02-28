import s from './Login.module.css';
import c from './../../common/FormsControls/FormsControls.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators';
import { loginUserData } from '../../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const FormLogin = (props) => {
    return (
        <form className={s.formLogin} onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={Input} name="email" type="email" placeholder="Email" />
            </div>
            <div>
                <Field validate={[required]} component={Input} name='password' type="password" placeholder="Password" />
            </div>
            <div>
                <Field component={Input} name='rememberMe' type="checkbox" />Remember me
            </div>
            {props.error && <div className={c.formSummaryError}>{props.error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

const Login = (props) => {
    const handleSubmit = (formData) => {
        props.loginUserData(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) return <Navigate to={'/profile'} />;

    return (
        <div className={s.formLoginContainer}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleSubmit} />
        </div>  
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(FormLogin);

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginUserData})(Login);

