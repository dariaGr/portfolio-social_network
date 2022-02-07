import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.background}>
                <img src='https://th.bing.com/th/id/R.8c33c85f171e65d0a929de0a5da51526?rik=GiP2ZSDR40BwYg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GyO8EHPyAJ0%2fUQfTbfa0LLI%2fAAAAAAAAgn4%2f4A3aoBc6Rd4%2fs1600%2fAlberta_Mountains_Panorama.jpg&ehk=ERVQeSd0v5Ga9%2fkTEFEQJPTUzNXNILbAzNGrO8werCI%3d&risl=&pid=ImgRaw&r=0' />
            </div>
            <div className={s.content}>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>Post</div>
                    <div>Post</div>
                    <div>Post</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

