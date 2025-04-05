import React from 'react'
import NavbarAfter from '../Components/NavbarAfter'
import { useNavigate } from 'react-router-dom';


const Car4 = () => {
  const navigate = useNavigate();

  const handlePurchase = (event) => {
    event.preventDefault();  // Prevent default anchor behavior
    navigate('/purchase');   // Correct way to navigate programmatically
  };
  return (
    <>
    <NavbarAfter />
<section class="carssection container" id="carssection">
<div class="carssection-img">
    <img src="./src/img/car4.jpg" alt=""/>
</div>
<div class="carssection-text">
<div class="box">
    <h2>Audi Car</h2>
    <span>Rs.65.72 - 72.06 Lakh </span>
    <i class='bx bxs-star'>(6 Reviews)</i>
    <br />
    <a href="" class="details">View Details</a>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit nemo quae distinctio, mollitia aliquam!</p>
    <button onClick={handlePurchase} className="btn">Buy Now</button>

  </div>
</div>
</section>
</>
  )
}

export default Car4