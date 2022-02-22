import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';

const App = () => {
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

export default App;
