import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo-removebg-preview.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
   

    <div className="logo">
  <img src={logo} alt="Blog da IA" />
</div>

      <div className="social">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="icon">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
