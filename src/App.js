import {BrowserRouter,router,Route, Routes, Link} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <Header/>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path='/contact-us' element={<Contact />} />
           <Route path='/Services' element={<Services />} />
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
