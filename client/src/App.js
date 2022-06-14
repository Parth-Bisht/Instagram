import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
       </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
