import { Route, Routes } from 'react-router-dom';
import AllAlumnus from './Components/Alumni/AllAlumnus';
import Alumnus from './Components/Alumni/Alumnus';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './Components/AboutUs/AboutUs';
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
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile';
import UpdateProfile from './Components/Dashboard/UpdateProfile';
import Users from './Components/Dashboard/Users';


const App = () => {
  return (
    <div className="App ">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about-us' element={<AboutUs />}></Route>
          <Route path='/gallery' element={<Gallary />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/alumnus' element={<RequireAuth><Alumnus /></RequireAuth>}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/jobs' element={<RequireAuth><Jobs /></RequireAuth>}></Route>
          <Route path='/all-alumnus' element={<AllAlumnus />}></Route>
          <Route path='/reset-password' element={<ResetPassword />}></Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<MyProfile />}></Route>
            <Route path='update-profile' element={<UpdateProfile />}></Route>
            <Route path='all-users' element={<Users />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
