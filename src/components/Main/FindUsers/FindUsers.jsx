import s from './FindUsers.module.css';
import User from '../../../assets/user.jpg';

const FindUsers = ({totalUsersCount, pageSize, users, currentPage, toggleFollow, onPageChanged}) => {

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
                        <img className={s.userImg} src={user.photos.small != null ? user.photos.small : User} alt="user-avatar" />
                        <button onClick={() => {toggleFollow(user.id)}} className={s.followButton}>
                            {user.followed ? 'Unfollow' : 'Follow'}
                        </button>
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