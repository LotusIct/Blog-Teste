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
          <h2>Onde inteligência artificial encontra clareza.</h2>
          <p>
            Vivemos em uma era em que tecnologia evolui mais rápido do que a maioria das pessoas consegue acompanhar. Este espaço existe exatamente para preencher essa lacuna.
          </p>
          <p>
           Aqui você vai encontrar conteúdos sobre inteligência artificial, inovação e tecnologia explicados com lógica, contexto e propósito — sem exageros, sem promessas vazias e sem jargões desnecessários.
          </p>
          <p>
           A base tecnológica por trás deste projeto utiliza modelos avançados de IA treinados com grandes volumes de informação, capazes de analisar padrões, gerar insights e apoiar a construção de conhecimento de forma contínua.

Cada interação, cada tema explorado e cada artigo publicado têm um único objetivo: transformar informação em entendimento e curiosidade em aprendizado aplicável.
          </p>
          <p>
           Se você busca compreender como a tecnologia impacta o presente e molda o futuro, este é o seu espaço
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
