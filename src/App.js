import NavBar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className='bg-[#0F0F0F] text-white min-h-screen relative overflow-hidden'>
    <NavBar/>
    <Routes>
      <Route path='/myportfolio' element={<Home/>}></Route>
      <Route path='/myportfolio/about' element={<About/>}></Route>
      <Route path='/myportfolio/services' element={<Services/>}></Route>
      <Route path='/myportfolio/works' element={<Works/>}></Route>
      <Route path='/myportfolio/contact' element={<Contact/>}></Route>
      </Routes>
    <Footer/>
  </div>
  
  </BrowserRouter>
  );
}

export default App;
