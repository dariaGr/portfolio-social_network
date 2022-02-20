import React from 'react';
import s from './FindUsers.module.css';
import axios from 'axios';
import User from '../../../assets/user.jpg';

class FindUsers extends React.Component {
    constructor(props){
        super(props)

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render(){
        return (
        <div className={s.findUsers}>
            <h1 className={s.title}>Users</h1>
            <div className={s.users}>
                {this.props.users.map(user => 
                    <div key={user.id} className={s.userCard}>
                    <div className={s.column}>
                        <img className={s.userImg} src={user.photos.small != null ? user.photos.small : User} alt="user-avatar" />
                        <button onClick={()=>{this.props.toggleFollow(user.id)}} className={s.followButton}>
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
                </div>
                    )}
            </div>
            <button className={s.showMoreButton}>Show more</button>
        </div>
        )
    }
}

export default FindUsers;