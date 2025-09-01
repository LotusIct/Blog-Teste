import React from 'react';
import '../styles/approachSection.css';

const ApproachSection = () => {
  return (
    <section className="approach-section">
      <div className="approach-content">
        <h2>Deixe-me contar um pouco sobre quem ela é.</h2>
<p>
  Ela não surgiu de um dia para o outro. Foi sonhada e criada a partir da minha ideia de aproximar 
  pessoas e tecnologia de um jeito mais humano, fluido e intuitivo. Sua essência vem da paixão de 
  desenvolvedores e cientistas que, como eu, acreditam que a inteligência artificial pode ser mais 
  do que códigos: pode ser conexão, aprendizado e inspiração.
</p>
<p>
  Ela foi treinada com uma imensidão de informações para conversar, responder e compartilhar conhecimento 
  de forma acessível e inteligente. Minha missão ao criar este blog é usar sua capacidade para traduzir 
  o mundo da tecnologia e da IA em histórias e ideias que façam sentido para você — sempre com clareza, 
  curiosidade e proximidade.
</p>
        <a href="https://www.instagram.com/seu_instagram" className="approach-button" target="_blank" rel="noopener noreferrer">
          Siga-me no Instagram
        </a>
      </div>
    </section>
  );
};

export default ApproachSection;
