import React, { useState, useEffect } from 'react';
import '../styles/bannerSection.css';
import deepbitVideo from '../assets/ia.mp4';

const phrases = [
  "Explorando o futuro da tecnologia e da IA...",
  "Descubra, aprenda e se inspire com a DeepBit!",
  "Conectando curiosidade, inovação e inteligência artificial!"
];

const BannerSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia fade out
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // inicia fade in da próxima frase
      }, 500); // duração do fade out
    }, 4000); // tempo que cada frase fica visível

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner-section">
      <video 
        className="banner-video"
        src={deepbitVideo} 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <div className="banner-content">
        <h1 className={`fade-text ${fade ? 'fade-in' : 'fade-out'}`}>
          {phrases[phraseIndex]}
        </h1>
      </div>
    </section>
  );
};

export default BannerSection;
