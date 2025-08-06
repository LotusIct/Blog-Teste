import React, { useState } from 'react';
import '../styles/inscriptionSection.css';  // Certifique-se de ter esse arquivo CSS

const InscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Você está inscrito para interagir com a IA! E-mail: ${email}`);
    setEmail('');
  };

  return (
    <section className="inscription-section">
      <div className="inscription-content">
        <h2>Inscreva-se para conversar com a IA do Blog!</h2>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Digite seu e-mail para conversar com a IA"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Iniciar Conversa com a IA</button>
        </form>
      </div>
    </section>
  );
};

export default InscriptionSection;
