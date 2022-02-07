import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Main from './components/Main';

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
