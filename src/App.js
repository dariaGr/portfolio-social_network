import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = ({dialogs, messages, posts}) => {
  return (
    <Router>
      <div className='app-wrapper'>
          <Header />
          <Aside />
          <Main dialogs={dialogs} messages={messages} posts={posts} />
      </div>
    </Router>
  );
};

export default App;
