import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footes';  // Corrigir o nome do arquivo de footer
import InscriptionSection from './components/contact';  // Importando a seção de inscrição
import Blog from './components/blog'
import Citação from './components/citação'
import Ia from './components/ia'
import About from './components/about'
import Banner from './components/banner'
import './index.css'; // Seu CSS global com paleta e fontes
import './styles/global.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        {/* Aqui fica a seção de inscrição */}
   <Banner id="banner" />
<About id="sobre" />
<Ia id="ia" />
<Citação id="citacao" />
<Blog id="blog" />
<InscriptionSection id="contato" />

      
        {/* Adicione o conteúdo principal aqui */}
      </main>
      <Footer />
    </>
  );
}

export default App;
