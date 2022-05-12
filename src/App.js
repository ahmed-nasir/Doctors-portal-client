import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/> }/>
        <Route path='/appointment' element={<Appointment/> }/>
        <Route path='/reviews' element={<Reviews/> }/>
        <Route path='/contactUs' element={<ContactUs/> }/>
      </Routes>

    </div>
  );
}

export default App;
