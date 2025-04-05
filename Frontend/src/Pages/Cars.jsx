import React from 'react';
import { useNavigate } from 'react-router-dom';



const Cars = () => {
    const Navigate = useNavigate(); 
    
    const goToCar1 = () => {
        Navigate('/car1');  // Navigate to the SignUp page
    };

    const goToCar2 = () => {
        Navigate('/car2');  // Navigate to the SignUp page
    };
    
    const goToCar3 = () => {
        Navigate('/car3');  // Navigate to the SignUp page
    };
    
    const goToCar4 = () => {
        Navigate('/car4');  // Navigate to the SignUp page
    };

    const goToCar5 = () => {
        Navigate('/car5');  // Navigate to the SignUp page
    };

    const goToCar6 = () => {
        Navigate('/car6');  // Navigate to the SignUp page
    };



  return (
    <>
    
   

      <section className="cars" id="cars">
        <div className="heading">
            <span>All Cars</span>
            <h2>We have all types of cars</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique.</p>

           
            <div className="car-container container">
                <div className="box">
                    <img src="./src/img/car1.jpg" alt=""/>
                    <a onClick={goToCar1} className="btn">Porche Car</a>
                </div>

                <div className="box">
                    <img src="./src/img/car2.jpg" alt=""/>
                    <a onClick={goToCar2} className="btn">Audi Car</a>
                </div>

                <div className="box">
                    <img src="./src/img/car3.jpg" alt=""/>
                    <a onClick={goToCar3} className="btn">Audi Car</a>
                </div>

                <div className="box">
                    <img src="./src/img/car4.jpg" alt=""/>
                    <a onClick={goToCar4} className="btn">Audi Car</a>
                </div>

                <div className="box">
                    <img src="./src/img/car5.jpg" alt=""/>
                    <a onClick={goToCar5} className="btn">Audi Car</a>
                </div>

                <div className="box">
                    <img src="./src/img/car6.jpg" alt=""/>
                    <a onClick={goToCar6} className="btn">Porche Car</a>
                </div>

                <div className="box1">
                  <a href="" className="btn" >View More</a>
                </div>
            </div>

     
            


        </div>
    </section>
    </>
  )
}

export default Cars