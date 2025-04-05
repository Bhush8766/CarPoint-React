
import './App.css'

import Home from './Pages/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cars from './Pages/Cars';
import Parts from './Pages/Parts';
import About from './Pages/About';
import OurBlog from './Pages/OurBlog';
import Car1 from './Cars/Car1';
import UserRegister from './Pages/userRegister'
import UserLogin from './Pages/userLogin'
import NavbarAfter from './Components/NavbarAfter';
import HomeAfter from './Pages/HomeAfter'

import Car2 from './Cars/Car2';
import Car3 from './Cars/Car3';
import Car4 from './Cars/Car4';
import Car5 from './Cars/Car5';
import Car6 from './Cars/Car6';
import CarPurchaseForm from './Pages/CarPurchaseForm';
import PartPurchaseForm from './Pages/PartPurchaseForm';





function App() {

  return (
    <>
    <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeAfter />} />
          <Route path="/cars" element={<Cars/>} />
          <Route path="/parts" element={<Parts/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<OurBlog/>} />
          <Route path="/signup" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/car1" element={<Car1/>} />
          <Route path="/car2" element={<Car2/>} />
          <Route path="/car3" element={<Car3/>} />
          <Route path="/car4" element={<Car4/>} />
          <Route path="/car5" element={<Car5/>} />
          <Route path="/car6" element={<Car6/>} />
          <Route path="/purchase" element={<CarPurchaseForm/>} />
          <Route path="/partpurchase" element={<PartPurchaseForm/>} />


        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
