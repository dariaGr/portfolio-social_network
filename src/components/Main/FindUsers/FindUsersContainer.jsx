import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress } from './../../../redux/usersReducer';
import FindUsers from './FindUsers';
import Loader from './../../common/Loader/Loader';
import { getUsers, getUsersOnPageChanged } from './../../../redux/usersReducer';

class FindUsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress} />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export default connect(mapStateToProps, 
    {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers, getUsersOnPageChanged})(FindUsersContainer);