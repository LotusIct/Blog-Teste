import React, { useState } from 'react';
import '../styles/footer.css';
import logo from '../assets/logobranco.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Inscrito com o e-mail: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção de Contato */}
        <div className="footer-contact">
          <h3>Mantenha contato.</h3>
          <p>
            Feito por <a href="https://www.squarespace.com">Michaela Galbiati</a>
          </p>
        </div>

        {/* Seção Dúvidas */}
        <div className="footer-duvidas">
          <h3>Dúvidas?</h3>
          <a href="mailto:michaela.galbiati@gmail.com">Fale conosco</a>
        </div>

        {/* Menu de Navegação */}
        <div className="footer-menu">
          <h3>Menu.</h3>
          <ul>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>

      {/* Logo + Copyright */}
      <div className="footer-copyright">
        <img src={logo} alt="Logo MIRAI" className="footer-logo" />
        <p>© {new Date().getFullYear()} MIRAI • Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
