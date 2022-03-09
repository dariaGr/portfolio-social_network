import s from './FindUsers.module.css'
import Paginator from '../../common/Paginator/Paginator'
import User from './User'

const FindUsers = ({
  totalUsersCount,
  pageSize,
  users,
  currentPage,
  onPageChanged,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div className={s.findUsers}>
      <h1 className={s.title}>Users</h1>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div className={s.users}>
        {users.map(user => (
          <User
            user={user}
            key={user.id}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
          />
        ))}
      </div>
      <button className={s.showMoreButton}>Show more</button>
    </div>
  )
}

export default FindUsers
