import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

const Main = ({ state, store }) => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path='/profile' element={<Profile store={store} state={state} />} />
        <Route path='/dialogs' element={<Dialogs store={store} state={state} />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </main>
  );
};

export default Main;