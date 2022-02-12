import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = ({ state, store }) => {
  return (
    <Router>
      <div className='app-wrapper'>
          <Header />
          <Aside />
          <Main state={state} store={store}/>
      </div>
    </Router>
  );
};

export default App;
