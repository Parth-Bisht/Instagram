import './App.css';
import {Routes,Route} from 'react-router-dom';
import FeedPage from './Pages/FeedPage';
import Welcome from './Pages/WelcomePage';
import SignupPage from './Pages/SignupPage';
import Otp from './components/SignInandLogin/Otp.jsx';
import Signup2 from './components/SignInandLogin/Signup2.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/dob" element={<Signup2/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
