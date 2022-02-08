import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

const Main = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/dialogs' element={<Dialogs />} />
      </Routes>
    </main>
  );
};

export default Main;