import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate(); 

    // const goToHome = () => {
    //     navigate('/');  // Navigate to the SignUp page
    // };

    // const goToCars = () => {
    //     navigate('/cars');  // Navigate to the SignUp page
    // };

    // const goToAbout = () => {
    //     navigate('/about');  // Navigate to the SignUp page
    // };

    // const goToParts = () => {
    //     navigate('/parts');  // Navigate to the SignUp page
    // };

    // const goToBlog = () => {
    //     navigate('/blog');  // Navigate to the SignUp page
    // };
    
    const goToSignUp = () => {
        navigate('/signout');  // Navigate to the SignUp page
    };

   

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }; 
    
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };




    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            <header className={hasShadow ? 'shadow' : ''}>
                <div className="nav container">
                   
                    <i className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></i>

                   
                    <a href="" className="logo">Car<span>Point</span></a>

                    <ul className={isOpen ? "nav-links open" : "nav-links"}>
                        <li><a href="#home"className="active">Home</a></li>
                        
                        <li><a href="#cars" className="cars-link" >Cars</a></li>
                        <li><a href="#about" className="about-link">About</a></li>
                        <li><a href="#parts" className="parts-link">Parts</a></li>
                        <li><a href="#blog" className="blog-link">Our Blog</a></li>
                        <li><a onClick={goToSignUp} href='/' className="signup-btn">Sign Out</a></li>
                        
                    </ul>
                    

                    <i className="bx bx-search" id="search-icon" onClick={toggleSearch}></i>
                    

                    
                    <div className={`search-box container ${isSearchOpen ? 'active' : ''}`}>
                        <input type="search" placeholder="Search here.." />
                    </div>

                </div>
            </header>
        </>
    );
};

export default Navbar;
