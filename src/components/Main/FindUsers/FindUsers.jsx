import s from './FindUsers.module.css';

const FindUsers = ({users, setUsers, toggleFollow}) => {
    if (users.length === 0) {
        setUsers([
            {id: 1, 
            photoUrl: 'https://static.livebooks.com/a252d92208c3401c9af74171e154fbe1/i/d0dceb6b20d643afbb539ce2f02d7f47/1/GCuCv726vxAVM9sgguVj4g/7_0_172_1duhamelfinal.jpg',
            followed: false,
            fullName: 'Dmitry K.', 
            status: 'I am looking for a job right now...',
            location: {
                city: 'Berlin',
                country: 'Germany'
                }
            },
            {id: 2, 
            photoUrl: 'https://4.bp.blogspot.com/-PVm5fMH_j6Q/T7CqSHCJXHI/AAAAAAAAMr4/K2dTrioUmYc/s1600/dunn01.jpg',
            followed: true,
            fullName: 'Elena M.', 
            status: 'Random status!',
            location: {
                city: 'Munich',
                country: 'Germany'
                }
            },
            {id: 3, 
            photoUrl: 'https://th.bing.com/th/id/R.c6b482f5e343903955234a1f60e9ecda?rik=m789TZQTh%2fzXPA&riu=http%3a%2f%2fsunrift.com%2fwp-content%2fuploads%2f2014%2f12%2fBlake-profile-photo-square.jpg&ehk=KPaRRdhK2539xSF1ZlhKY25YNeohbiAO9FGYmnQIC7U%3d&risl=&pid=ImgRaw&r=0',
            followed: false,
            fullName: 'Michael T.', 
            status: 'Sleeping...',
            location: {
                city: 'Dusseldorf',
                country: 'Germany'
                }
            }
        ]);
    }

    return (
        <div className={s.findUsers}>
            <h1 className={s.title}>Users</h1>
            <div className={s.users}>
                {users.map(user => 
                    <div key={user.id} className={s.userCard}>
                    <div className={s.column}>
                        <img className={s.userImg} src={user.photoUrl} alt="user-avatar" />
                        <button onClick={()=>{toggleFollow(user.id)}} className={s.followButton}>
                            {user.followed ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.description}>
                            <div className={s.userName}>{user.fullName}</div>
                            <p className={s.userDesc}>{user.status}</p>
                        </div>
                        <div>
                            <div className={s.userCity}>{user.location.city},</div>
                            <div className={s.userCountry}>{user.location.country}</div>
                        </div>
                    </div>
                </div>
                    )}
            </div>
            <button className={s.showMoreButton}>Show more</button>
        </div>
    )
};

export default FindUsers;