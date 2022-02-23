import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { useMatch } from 'react-router-dom';
import s from './Profile.module.css';
import ProfileBg from './../../../assets/profile-bg.jpg';
import PostsContainer from './Posts/PostsContainer';
import ProfileBio from './ProfileBio/ProfileBio';
import { getUserProfile } from './../../../redux/profileReducer';
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';

const ProfileContainer = (props) => {
    const match = useMatch('/profile/:userId/');
    let userId = match ? match.params.userId : '22550';

    useEffect(() => {
        props.getUserProfile(userId);
    }, [])

    return (
        <div className={s.profile}>
            <div className={s.background}>
                <img src={ProfileBg} />
            </div>
            <div className={s.content}>
                <ProfileBio {...props} profile={props.profile} />
                <PostsContainer />
            </div>
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
    };
};

export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);