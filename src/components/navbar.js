import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul className="nav-links">
          <li><a href="/posts">Posts</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>

      <div className="logo">Blog da IA</div>

      <div className="social">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon">
          <i className="fab fa-instagram"></i> {/* Ícone Instagram */}
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="icon">
          <i className="fab fa-tiktok"></i> {/* Ícone TikTok */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
