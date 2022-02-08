import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Aside />
      <Main />
    </div>
  );
};

export default App;
