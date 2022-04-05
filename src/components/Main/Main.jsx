import { Routes, Route, Navigate } from 'react-router-dom'
import s from './Main.module.css'
import PostsContainer from './Profile/Posts/PostsContainer'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'
import FindUsersContainer from './FindUsers/FindUsersContainer'
import Login from './Login/Login'
import React from 'react'

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'))

const Main = () => {
  return (
    <main className={s.main}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path='/' element={<Navigate to={'/profile'} />} />
          <Route path='/profile' element={<PostsContainer />} />
          {/* <Route path='/profile' element={<ProfileContainer />} /> */}
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/find-users' element={<FindUsersContainer />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<div>404 NOT FOUND</div>} />
        </Routes>
      </React.Suspense>
    </main>
  )
}

export default Main
