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
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };
    
    onPageChanged = (page) => {
        this.props.getUsersOnPageChanged(page, this.props.pageSize);
    };

    render() {
        return (
            <>
            {this.props.isFetching ? <Loader /> : null}
            <FindUsers 
                totalUsersCount={this.props.totalUsersCount} 
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followSuccess={this.props.followSuccess}
                unfollowSuccess={this.props.unfollowSuccess}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow} />
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