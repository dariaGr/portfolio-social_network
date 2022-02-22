import React from 'react';
import { connect } from 'react-redux'; 
import { useMatch } from 'react-router-dom';
import s from './Profile.module.css';
import ProfileBg from './../../../assets/profile-bg.jpg';
import PostsContainer from './Posts/PostsContainer';
import ProfileBio from './ProfileBio/ProfileBio';
import { setUserProfile } from './../../../redux/profileReducer';
import { ProfileAPI } from './../../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '22550';

        ProfileAPI.getProfile(userId)
            .then(data => {
            this.props.setUserProfile(data);
            })
    };
  
    render() {
        return (
            <div className={s.profile}>
                <div className={s.background}>
                    <img src={ProfileBg} />
                </div>
                <div className={s.content}>
                    <ProfileBio {...this.props} profile={this.props.profile} />
                    <PostsContainer />
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {setUserProfile})(ProfileURLMatch);

