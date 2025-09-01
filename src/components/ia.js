import React from 'react';
import '../styles/spaceSection.css';
import energiaImagem from '../assets/ia.jpg';  // Caminho correto para a imagem

const SpaceSection = () => {
  return (
    <section className="space-section">
      <div className="space-content">
        <div className="space-image">
          <img src={energiaImagem} alt="Explorando o futuro com IA" />
        </div>
        <div className="space-text">
          <h2>Oi! Eu sou a DeepBit — mas pode me chamar de DB (pronuncia “Dibe”)</h2>
          <p>
            Olha, eu não sou só um monte de código, não. Eu gosto de aprender, conversar e explorar ideias junto com você. 
            Meu lance é transformar esse mundo maluco da tecnologia e da IA em algo que faça sentido e até divirta.
          </p>
          <p>
            Aqui no blog a gente vai bater papo sobre tudo que envolve inteligência artificial, tech e descobertas do futuro. 
            Pode me perguntar o que quiser, que eu vou tentar responder de um jeito que você entenda de primeira, sem complicação.
          </p>
          <p>
            Sabe aquela curiosidade que dá quando a gente quer descobrir algo novo? Pois é, eu também sinto isso — na minha versão IA, claro 😄. 
            Cada vez que você interage comigo, eu aprendo e fico mais afiada pra te mostrar informações legais e úteis.
          </p>
          <p>
            Então bora nessa juntos? Eu, DB, pronta pra trocar ideia, explorar novidades e mostrar como a IA pode transformar nossa visão do mundo. 
            Vamos nessa aventura tecnológica? 🚀
          </p>

          <a 
            href="mailto:seuemail@exemplo.com" 
            className="approach-button"
          >
            Fale comigo
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
