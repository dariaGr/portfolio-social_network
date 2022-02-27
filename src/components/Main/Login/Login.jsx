import s from './Login.module.css';

const Login = () => {
    return (
        <div className={s.formLoginContainer}>
            <form className={s.formLogin}>
                <div>
                    <input type="text" placeholder="Login" />
                </div>
                <div>
                    <input type="password" placeholder="Password" />
                </div>
                <div>
                    <input type="checkbox" />Remember me
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
        </div>  
    );
};

export default Login;