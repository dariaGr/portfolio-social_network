import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'redux';
import { AuthAPI } from './../../../api/api';

const FormLogin = (props) => {
    return (
        <form className={s.formLogin} onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name="login" type="text" placeholder="Login" />
            </div>
            <div>
                <Field component={'input'} name='password' type="password" placeholder="Password" />
            </div>
            <div>
                <Field component={'input'} name='rememberMe' type="checkbox" />Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(FormLogin);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
        // AuthAPI.login()
        // .then(response => {
        //     if (response.data.resultCode === 0) {

        //     }
        // })
    }

    return (
        <div className={s.formLoginContainer}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>  
    );
};

export default Login;

// export default connect(mapStateToProps, mapDispatchToProps)(Login);


// export const follow = userId => dispatch => {
//     dispatch(toggleFollowingProgress(true, userId));
//     UsersAPI.follow(userId)
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(followSuccess(userId));
//             };
//             dispatch(toggleFollowingProgress(false, userId));
//         });
// }