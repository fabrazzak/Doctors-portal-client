
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './pages/Sheare/Header/Header';
import Appointment from './pages/Appointment/Appointment';
import Reviews from './pages/Reviews/Reviews';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import FourOFour from './pages/FourOFour/FourOFour';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='appointment' element={<Appointment></Appointment>}/>
        <Route path='reviews' element={<Reviews></Reviews>}/>
        <Route path='contact' element={<ContactUs></ContactUs>}/>
        <Route path='login' element={<Login></Login>}/>
        <Route path='signup' element={<SignUp></SignUp>}/>
        <Route path='*' element={<FourOFour></FourOFour>}/>

      </Routes>
      
      
    </div>
  );
}

export default App;
