import './App.css';
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom';
import Feed from './components/All_Posts/Feed';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
      </Routes>
    </div>
  );
}

export default App;
