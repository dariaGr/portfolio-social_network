import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'redux';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators';

const FormLogin = (props) => {
    return (
        <form className={s.formLogin} onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={Input} name="login" type="text" placeholder="Login" />
            </div>
            <div>
                <Field validate={[required]} component={Input} name='password' type="password" placeholder="Password" />
            </div>
            <div>
                <Field component={Input} name='rememberMe' type="checkbox" />Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

const Login = () => {
    const handleSubmit = (formData) => {
        // postLoginUserData(formData);
    };

    return (
        <div className={s.formLoginContainer}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleSubmit} />
        </div>  
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(FormLogin);

export default Login;

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
