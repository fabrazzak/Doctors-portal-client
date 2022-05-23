
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
import RequireAuth from './pages/Login/RequireAuth';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import { ToastContainer } from 'react-toastify';
import DashBoard from './pages/DashBoard/DashBoard';
import MyAppointment from './pages/DashBoard/MyAppointment';
import Review from './pages/DashBoard/Review';
import AllUsers from './pages/DashBoard/AllUsers';
import RequereAdmin from './pages/Login/RequereAdmin';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}/>
        <Route path='dashboard' element={<RequireAuth>
        <DashBoard></DashBoard>
          
        </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='users' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path='contact' element={<ContactUs></ContactUs>}/>
        <Route path='login' element={<Login></Login>}/>
        <Route path='signup' element={<SignUp></SignUp>}/>
        <Route path='forget-password' element={<ForgetPassword></ForgetPassword>}/>
        <Route path='*' element={<FourOFour></FourOFour>}/>
       

      </Routes>
      <ToastContainer></ToastContainer>
      
      
    </div>
  );
}

export default App;
