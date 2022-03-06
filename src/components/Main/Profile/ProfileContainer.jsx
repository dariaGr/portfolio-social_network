import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { useMatch } from 'react-router-dom';
import s from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import ProfileBio from './ProfileBio/ProfileBio';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from './../../../redux/profileReducer';
import { compose } from 'redux';
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';

const ProfileContainer = (props) => {
    const isOwner = useMatch('/profile/');
    const match = useMatch('/profile/:userId/');
    let userId = match ? match.params.userId : props.authorizedUserId;
    
    useEffect(() => {    
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, []);

    return (
        <div className={s.profile}>
            <div className={s.content}>
                <ProfileBio isOwner={!!isOwner} profile={props.profile} status={props.status} 
                updateStatus={props.updateUserStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
                <PostsContainer />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    };
};

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}), 
withAuthRedirect)(ProfileContainer);
