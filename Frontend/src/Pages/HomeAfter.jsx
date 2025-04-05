import React from 'react'
import Cars from './Cars'
import About from './About'
import Parts from './Parts'
import OurBlog from './OurBlog'
import NavbarAfter from '../Components/NavbarAfter'



const Home = () => {
  return (
    <>
    <NavbarAfter />
        <section class="home" id="home">
        <div class="home-text">
            
                <h1>We Have Everything <br/>Your <span>Car</span> Need</h1>
            <p>Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. Est iusto officia.</p>

            <a href="" class="btn">Discover Now</a>
           
        </div>
    </section>

    <Cars/>
    <About/>
    <Parts/>
    <OurBlog/>
   
    
    

    </>
  )
}

export default Home