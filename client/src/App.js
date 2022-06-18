
import './App.css';
import './App.css';
import Footer from './Components/footer/Footer';
import Otp from './Components/signup/Otp';
import Signup from './Components/signup/Signup';
import Signup2 from './Components/signup/Signup2';
import { MainRoute } from './Routes/MainRoute';

function App() {
  return (
    <div className="App">
    <MainRoute/>

    {/* <Signup/> */}

     {/* <Signup2/> */}

     <Otp/>
     <Footer/>
    </div>
  );
}

export default App;
