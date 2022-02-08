import s from './ProfileBio.module.css';
import Avatar from '../assets/avatar.jpg';

const ProfileBio = () => {
    return (
        <div className={s.bio}>
            <img src={Avatar} alt="avatar" />
            <div className={s.description}>
                <h1 className={s.name}>Daria Grebenjuk</h1>
               <ul className={s.list}>
                    <li><span>Date of Birth:</span> 30th May</li>
                    <li><span>City:</span> Munich</li>
                    <li><span>Education:</span> University of Stuttgart '18</li>
                    <li><span>Website:</span> <a href='https://dariagr.github.io/portfolio/' target='_blank'>https://dariagr.github.io/portfolio/</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileBio;