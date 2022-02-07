import s from './Main.module.css';
import Profile from './Profile';

const Main = () => {
  return (
    <div className={s.main}>
      <Profile />
    </div>
  );
};

export default Main;