import s from './FindUsers.module.css';
import User from '../../../assets/user.jpg';

const FindUsers = () => {
    return (
        <div className={s.findUsers}>
            <h1 className={s.title}>Users</h1>
            <div className={s.users}>
                <div className={s.userCard}>
                    <div className={s.column}>
                        <img className={s.userImg} src={User} alt="user-avatar" />
                        <button className={s.followButton}>Follow</button>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.description}>
                            <div className={s.userName}>Dmitry K.</div>
                            <p className={s.userDesc}>I am looking for a job right now...</p>
                        </div>
                        <div>
                            <div className={s.userCity}>Berlin,</div>
                            <div className={s.userCountry}>Germany</div>
                        </div>
                    </div>
                </div>
                <div className={s.userCard}>
                    <div className={s.column}>
                        <img className={s.userImg} src={User} alt="user-avatar" />
                        <button className={s.followButton}>Follow</button>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.description}>
                            <div className={s.userName}>Dmitry K.</div>
                            <p className={s.userDesc}>I am looking for a job right now...</p>
                        </div>
                        <div>
                            <div className={s.userCity}>Berlin,</div>
                            <div className={s.userCountry}>Germany</div>
                        </div>
                    </div>
                </div>
                <div className={s.userCard}>
                    <div className={s.column}>
                        <img className={s.userImg} src={User} alt="user-avatar" />
                        <button className={s.followButton}>Follow</button>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.description}>
                            <div className={s.userName}>Dmitry K.</div>
                            <p className={s.userDesc}>I am looking for a job right now...</p>
                        </div>
                        <div>
                            <div className={s.userCity}>Berlin,</div>
                            <div className={s.userCountry}>Germany</div>
                        </div>
                    </div>
                </div>
                <div className={s.userCard}>
                    <div className={s.column}>
                        <img className={s.userImg} src={User} alt="user-avatar" />
                        <button className={s.followButton}>Follow</button>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.description}>
                            <div className={s.userName}>Dmitry K.</div>
                            <p className={s.userDesc}>I am looking for a job right now...</p>
                        </div>
                        <div>
                            <div className={s.userCity}>Berlin,</div>
                            <div className={s.userCountry}>Germany</div>
                        </div>
                    </div>
                </div>
                <div className={s.userCard}>
                    <div className={s.column}>
                        <img className={s.userImg} src={User} alt="user-avatar" />
                        <button className={s.followButton}>Follow</button>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.description}>
                            <div className={s.userName}>Dmitry K.</div>
                            <p className={s.userDesc}>I am looking for a job right now...</p>
                        </div>
                        <div>
                            <div className={s.userCity}>Berlin,</div>
                            <div className={s.userCountry}>Germany</div>
                        </div>
                    </div>
                </div>
            </div>
            <button className={s.showMoreButton}>Show more</button>
        </div>
    )
};

export default FindUsers;