import React from 'react';
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress,
        requestUsers, getUsersOnPageChanged, follow, unfollow } from '../../../redux/usersReducer';
import FindUsers from './FindUsers';
import Loader from './../../common/Loader/Loader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage,
        getIsFetching, getFollowingInProgress } from './../../../redux/usersSelectors';

class FindUsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props;
        requestUsers(currentPage, pageSize);
    };
    
    onPageChanged = (page) => {
        const {pageSize, getUsersOnPageChanged} = this.props;
        getUsersOnPageChanged(page, pageSize);
    };

    render() {
        const {isFetching, totalUsersCount, pageSize, currentPage, followSuccess, unfollowSuccess, 
               toggleFollowingProgress, users, followingInProgress, follow, unfollow} = this.props;

        return (
            <>
            {isFetching ? <Loader /> : null}
            <FindUsers 
                totalUsersCount={totalUsersCount} 
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged}
                followSuccess={followSuccess}
                unfollowSuccess={unfollowSuccess}
                toggleFollowingProgress={toggleFollowingProgress}
                users={users}
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow} />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default connect(mapStateToProps, 
    {followSuccess, unfollowSuccess, setCurrentPage, 
    toggleFollowingProgress, requestUsers, getUsersOnPageChanged,
    follow, unfollow})(FindUsersContainer);
    