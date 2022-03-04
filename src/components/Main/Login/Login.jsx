import s from './Login.module.css';
import c from './../../common/FormsControls/FormsControls.module.css';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input } from './../../common/FormsControls/FormsControls';
import { required } from './../../../utils/validators';
import { loginUserData } from './../../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import { createField } from './../../common/FormsControls/FormsControls';

const FormLogin = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input, 'email')}
            {createField('Password', 'password', [required], Input, 'password')}
            {createField(null, 'rememberMe', null, Input, 'checkbox', 'remember me')}
            {error && <div className={c.formSummaryError}>{error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

const Login = ({loginUserData, isAuth}) => {
    const handleSubmit = (formData) => {
        loginUserData(formData.email, formData.password, formData.rememberMe)
    };

    if (isAuth) return <Navigate to={'/profile'} />;

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
