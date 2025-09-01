import React, { useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
          <p>Feito por <a href="https://www.squarespace.com">Michaela Galbiati</a></p>
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

      {/* Seção de Copyright (agora abaixo de tudo) */}
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Blog da IA • Todos os direitos reservados</p>
      </div>

    </footer>
  );
};

export default Footer;
