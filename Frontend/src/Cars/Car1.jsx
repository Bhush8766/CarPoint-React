import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarAfter from '../Components/NavbarAfter';

const Car1 = () => {
  const navigate = useNavigate();

  const handlePurchase = (event) => {
    event.preventDefault();  // Prevent default anchor behavior
    navigate('/purchase');   // Correct way to navigate programmatically
  };

  return (
    <>
      <NavbarAfter />
      <section className="carssection container" id="carssection">
        <div className="carssection-img">
          <img src="./src/img/car1.jpg" alt="Car" />
        </div>
        <div className="carssection-text">
          <div className="box">
            <h2>Porche Car</h2>
            <span>Rs. 1.99 Crore </span>
            <i className="bx bxs-star">(6 Reviews)</i>
            <br />
            <a href="#" className="details">View Details</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit nemo quae distinctio, mollitia aliquam!</p>
            <button onClick={handlePurchase} className="btn">Buy Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Car1;
