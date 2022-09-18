import { Route, Routes } from 'react-router-dom';
import AllAlumnus from './Alumni/AllAlumnus';
import Alumni from './Alumni/Alumni';
import Alumnus from './Alumni/Alumnus';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Gallary from './Components/Gallary/Gallary';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Shared/Footer';
import NavBar from './Components/Shared/NavBar';
import NotFound from './Components/Shared/NotFound';

const App =() => {
  return (
    <div className="App ">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/gallary' element={<Gallary/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/alumnus' element={<Alumnus/>}></Route>
        <Route path='/all-alumnus' element={<AllAlumnus/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
