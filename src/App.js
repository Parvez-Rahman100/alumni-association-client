import { Route, Routes } from 'react-router-dom';
import Alumni from './Alumni/Alumni';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Gallary from './Components/Gallary/Gallary';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/Shared/NavBar';
import NotFound from './Components/Shared/NotFound';

const App =() => {
  return (
    <div className="App container  mx-auto">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/gallary' element={<Gallary/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/alumni' element={<Alumni/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
