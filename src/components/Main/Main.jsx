import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import DialogsContainer from './Dialogs/DialogsContainer';
import FindUsersContainer from './FindUsers/FindUsersContainer';

const Main = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path='/dialogs' element={<DialogsContainer />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/find-users' element={<FindUsersContainer />} />
      </Routes>
    </main>
  );
};

export default Main;