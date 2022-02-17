import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import DialogsContainer from './Dialogs/DialogsContainer';

const Main = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/dialogs' element={<DialogsContainer store={store} />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </main>
  );
};

export default Main;