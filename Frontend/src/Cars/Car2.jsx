import React from 'react';
import NavbarAfter from '../Components/NavbarAfter'
import { useNavigate } from 'react-router-dom';


const Car2 = () => {
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
            <img src="./src/img/car2.jpg" alt=""/>
        </div>
        <div class="carssection-text">
        <div class="box">
            <h2>Audi Car</h2>
            <span>Rs.46.99 - 55.84 Lakh </span>
            <i class='bx bxs-star'>(6 Reviews)</i>
            <br />
            <a href="" class="details">View Details</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit nemo quae distinctio, mollitia aliquam!</p>
            <button onClick={handlePurchase} className="btn">Buy Now</button>

          </div>
        </div>
    </section>
        </>
    );
};

export default Car2;
