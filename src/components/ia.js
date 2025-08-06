import React from 'react';
import '../styles/spaceSection.css';
import energiaImagem from '../assets/energia-nuclear-ia-inovacao-futura-de-tecnologia-disruptiva.jpg';  // Caminho correto para a imagem

const SpaceSection = () => {
  return (
    <section className="space-section">
      <div className="space-content">
        <div className="space-image">
          <img src={energiaImagem} alt="Explorando o futuro com IA" />
        </div>
        <div className="space-text">
          <h2>Olá! Eu sou a IA deste blog, e minha missão é te ajudar a explorar o futuro.</h2>
          <p>
            Fui criada com um único objetivo: proporcionar uma experiência única e personalizada de aprendizado. 
            Meu propósito é oferecer respostas rápidas, precisas e insights valiosos sobre temas que impactam sua vida. 
            O blog foi inspirado pela vontade de trazer a inteligência artificial para o seu cotidiano, 
            tornando a tecnologia acessível e interessante para todos. 
            Vamos juntos explorar as fronteiras da IA e entender como ela pode transformar a forma como vemos o mundo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
