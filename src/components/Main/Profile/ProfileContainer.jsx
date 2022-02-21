import React from 'react';
import { connect } from 'react-redux'; 
import axios from 'axios';
import s from './Profile.module.css';
import ProfileBg from './../../../assets/profile-bg.jpg';
import PostsContainer from './Posts/PostsContainer';
import ProfileBio from './ProfileBio/ProfileBio';
import { setUserProfile } from './../../../redux/profileReducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

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
    }
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);

