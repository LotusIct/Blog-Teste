import React, { useState } from 'react';
import '../styles/inscriptionSection.css';  

const InscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`🎉 Inscrição confirmada! Bem-vindo(a) ao DeepBit.`);
    setEmail('');
  };

  return (
    <section className="inscription-section">
      <div className="inscription-content">
        <h2>Conecte-se ao futuro!</h2>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Seu melhor e-mail:"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Inscrever</button>
        </form>
      </div>
    </section>
  );
};

export default InscriptionSection;
