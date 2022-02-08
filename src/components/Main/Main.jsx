import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

const Main = ({dialogs, messages, posts}) => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path='/profile' element={<Profile posts={posts} />} />
        <Route path='/dialogs' element={<Dialogs dialogs={dialogs} messages={messages} />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </main>
  );
};

export default Main;