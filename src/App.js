import { Route, Routes } from 'react-router-dom';
import AllAlumnus from './Alumni/AllAlumnus';
import Alumnus from './Alumni/Alumnus';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Gallary from './Components/Gallary/Gallary';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import ResetPassword from './Components/Login/ResetPassword';
import SignUp from './Components/Login/SignUp';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/NavBar';
import NotFound from './Components/Shared/NotFound';

const App = () => {
  return (
    <div className="App ">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about-us' element={<AboutUs />}></Route>
          <Route path='/gallary' element={<Gallary />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/alumnus' element={<RequireAuth><Alumnus /></RequireAuth>}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/jobs' element={<RequireAuth><Jobs /></RequireAuth>}></Route>
          <Route path='/all-alumnus' element={<AllAlumnus />}></Route>
          <Route path='/reset-password' element={<ResetPassword />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
