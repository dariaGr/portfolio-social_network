import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { useMatch } from 'react-router-dom';
import s from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import ProfileBio from './ProfileBio/ProfileBio';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../../redux/profileReducer';
import { compose } from 'redux';

const ProfileContainer = (props) => {
    const match = useMatch('/profile/:userId/');
    let userId = match ? match.params.userId : '22550';

    useEffect(() => {
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, []);

    return (
        <div className={s.profile}>
            <div className={s.content}>
                <ProfileBio {...props} profile={props.profile} status={props.status} updateStatus={props.updateUserStatus} />
                <PostsContainer />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
};

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}))(ProfileContainer);