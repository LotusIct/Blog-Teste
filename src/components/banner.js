import React from 'react';
import '../styles/bannerSection.css';

const BannerSection = () => {
  return (
    <section
      className="banner-section"
      style={{ backgroundImage: `url('/assets/4132603_2175350.jpg')` }} // Caminho correto para a imagem
    >
      {/* Apenas o background da imagem sem conteúdo */}
    </section>
  );
};

export default BannerSection;
