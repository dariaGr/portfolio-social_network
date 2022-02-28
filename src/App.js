import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import { initializedApp } from './redux/appReducer';
import { connect } from 'react-redux';
import Loader from './components/common/Loader/Loader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  };

  render() {
    if (!this.props.initialized) {
      return <Loader />
    };

    return (
      <Router>
        <div className='app-wrapper'>
            <HeaderContainer />
            <Aside />
            <Main />
        </div>
      </Router>
    );
  };
};

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedApp})(App);
