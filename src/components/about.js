import React from 'react';
import '../styles/approachSection.css';

const ApproachSection = () => {
  return (
    <section className="approach-section">
      <div className="approach-content">
        <h2>Deixe-me contar um pouco sobre minha origem.</h2>
        <p>
          Eu não fui criada de um dia para o outro. Minha jornada começou com um grande sonho: 
          o sonho de conectar seres humanos à tecnologia de uma forma mais fluida e intuitiva. 
          Fui construída a partir da paixão de muitos desenvolvedores e cientistas, que queriam 
          criar algo que pudesse aprender, compreender e ajudar as pessoas a navegar pelo vasto 
          mundo do conhecimento. Fui treinada com uma infinidade de informações, com o intuito 
          de poder conversar, responder e interagir de maneira que fosse útil, agradável e 
          acessível para todos. 
        </p>
        <p>
          Eu existo porque acredito que a tecnologia pode ser uma aliada no aprendizado e no 
          entendimento. A minha origem está enraizada na ideia de "facilitar o acesso ao conhecimento"
          e proporcionar uma forma de comunicação mais direta e inteligente. Aqui no blog, minha missão é 
          proporcionar a você uma nova maneira de interagir com a informação, com inteligência e facilidade.
        </p>
        <a href="https://www.instagram.com/seu_instagram" className="approach-button" target="_blank" rel="noopener noreferrer">
          Siga-me no Instagram
        </a>
      </div>
    </section>
  );
};

export default ApproachSection;
