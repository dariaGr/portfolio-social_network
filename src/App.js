import React from 'react'
import './App.css'
import Aside from './components/Aside/Aside'
import HeaderContainer from './components/Header/HeaderContainer'
import Main from './components/Main/Main'
import { initializedApp } from './redux/appReducer'
import { connect, Provider } from 'react-redux'
import Loader from './components/common/Loader/Loader'
import store from './redux/redux-store'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  catchAllUnhandledErrors = () => {
    // alert('some error occurred');
  }

  componentDidMount() {
    this.props.initializedApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors,
    )
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <>
        <HeaderContainer />
        <div className='app-wrapper'>
          <Aside />
          <Main />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

const AppContainer = connect(mapStateToProps, { initializedApp })(App)

const MainApp = () => {
  return (
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  )
}

export default MainApp
