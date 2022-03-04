import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import FindUsersContainer from './FindUsers/FindUsersContainer';
import Login from './Login/Login';
import React from 'react';
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));

const Main = () => {
  return (
    <main className={s.main}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/find-users' element={<FindUsersContainer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </React.Suspense>
    </main>
  );
};

export default Main;
