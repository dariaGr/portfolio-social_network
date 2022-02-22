import s from './FindUsers.module.css';
import User from './../../../assets/user.jpg';
import { NavLink } from 'react-router-dom';
import { FollowAPI } from './../../../api/api';

const FindUsers = ({totalUsersCount, pageSize, users, currentPage, follow, unfollow, onPageChanged}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
        const pages = [];
        for (let i=1; i<=pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

    return (
        <div className={s.findUsers}>
            <h1 className={s.title}>Users</h1>
            <div className={s.pagesList}>
                {pages.map(page => {
                    return (
                    <span className={currentPage === page ? s.selectedPage : s.page}
                    onClick={() => onPageChanged(page)} key={page}>{page}</span>
                    )
                })}
            </div>
            <div className={s.users}>
                {users.map(user => 
                    <div key={user.id} className={s.userCard}>
                    <div className={s.column}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={s.userImg} src={user.photos.small != null ? user.photos.small : User} alt="user-avatar" />
                        </NavLink>
                        {user.followed 
                        ? <button onClick={()=>{
                            FollowAPI.unfollow(user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        unfollow(user.id)
                                    }
                                })
                        }} className={s.followButton}>Unfollow</button>
                        : <button onClick={()=>{
                            FollowAPI.follow(user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        follow(user.id)
                                    }
                                })
                        }} className={s.followButton}>Follow</button>
                        }
                    </div>
                    <div className={s.userContent}>
                        <div className={s.description}>
                            <div className={s.userName}>{user.name}</div>
                            <p className={s.userDesc}>{user.status}</p>
                        </div>
                        <div>
                            <div className={s.userCity}>{'user.location.city'},</div>
                            <div className={s.userCountry}>{'user.location.country'}</div>
                        </div>
                    </div>
                </div>)}
            </div>
            <button className={s.showMoreButton}>Show more</button>
        </div>
    )
}

export default FindUsers;