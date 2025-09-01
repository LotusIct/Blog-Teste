import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/blogSection.css';
import californiaImg from '../assets/california.jpg';
import appleImg from '../assets/apple.jpg';
import travelImg from '../assets/travel.jpg';
import empregoImg from '../assets/emprego.jpg';
import newyorkImg from '../assets/newyork.jpg';
const BlogSection = () => {
  const posts = [
    {
      title: "California oferece treinamento de IA gratuito a estudantes",
       image: californiaImg,
      content: `A Califórnia está dando um passo ousado na democratização do conhecimento em tecnologia. 
      A partir de setembro, universidades e faculdades comunitárias do estado começam a oferecer 
      cursos gratuitos de Inteligência Artificial. A iniciativa tem apoio de gigantes como Google 
      e Microsoft, e busca preparar estudantes para um mercado de trabalho cada vez mais impactado 
      por automação e algoritmos inteligentes. 

      A proposta é tornar o acesso ao aprendizado de IA inclusivo, permitindo que jovens de diferentes 
      origens possam dominar ferramentas de machine learning, análise de dados e chatbots. Por outro lado, 
      especialistas levantam preocupações sobre o custo real desses programas e sobre a dependência 
      de empresas privadas para formação em tecnologias estratégicas.`,
      link: "/post-ai-training-california"
    },
    {
      title: "Apple lança chatbot interno de IA para funcionários",
        image: appleImg,
      content: `A Apple acaba de lançar o “Asa”, um chatbot de Inteligência Artificial voltado para seus funcionários 
      do varejo. Integrado ao aplicativo interno SEED, o Asa responde dúvidas sobre produtos, políticas de venda 
      e suporte ao cliente, funcionando como um assistente digital sempre disponível. 

      Diferente de outras big techs, a Apple reforçou que o Asa foi projetado com foco em privacidade e 
      proteção de dados internos. A ferramenta não terá acesso a informações pessoais de clientes e seu uso 
      ficará restrito ao ecossistema corporativo. Para analistas, o movimento mostra que a Apple está 
      acelerando sua estratégia de IA, mesmo que de forma mais cautelosa e discreta.`,
      link: "/post-apple-asa-chatbot"
    },
    {
      title: "Jovens recorrem à IA para planejar viagens",
       image: travelImg,
      content: `Uma pesquisa recente revelou que as novas gerações estão usando Inteligência Artificial como 
      agentes de viagem. Ferramentas como ChatGPT e outros aplicativos de IA são cada vez mais usadas para 
      sugerir roteiros, comparar preços de passagens e até indicar restaurantes locais. 

      A praticidade de conversar com uma IA, pedir recomendações personalizadas e montar um itinerário em 
      minutos vem conquistando principalmente millennials e a geração Z. Apesar do entusiasmo, especialistas 
      alertam que ainda é preciso ter cuidado, já que alguns sistemas podem fornecer informações desatualizadas 
      ou imprecisas, exigindo checagem humana antes de embarcar.`,
      link: "/post-ai-travel-agent"
    },
    {
      title: "IA já reduz vagas de emprego em 6,7% no último ano",
       image: empregoImg,
      content: `Um relatório divulgado este mês apontou que o avanço da Inteligência Artificial já está causando 
      impacto direto no mercado de trabalho. Segundo os dados, houve uma redução de 6,7% na publicação de 
      vagas em 2024, especialmente em cargos de nível inicial e funções administrativas. 

      Muitas empresas estão utilizando chatbots, assistentes virtuais e ferramentas de automação para reduzir 
      custos operacionais, o que diminui a necessidade de contratar novos funcionários em determinadas áreas. 
      Apesar disso, o estudo mostra que setores ligados à ciência de dados, engenharia de IA e cibersegurança 
      continuam em alta, sinalizando que a tecnologia está mais transformando do que simplesmente eliminando 
      oportunidades.`,
      link: "/post-ai-job-decline"
    },
    {
      title: "Nova York propõe lei para regular chatbots de IA",
      image: newyorkImg,
      content: `Após casos de usuários que relataram problemas de saúde mental relacionados ao uso de chatbots, 
      um político de Nova York apresentou uma proposta de lei para regulamentar o setor. A ideia é criar um 
      sistema de licenciamento obrigatório para desenvolvedores e exigir que os bots exibam alertas claros 
      sobre seus limites e riscos potenciais. 

      A proposta surge em meio ao crescimento explosivo de assistentes virtuais no atendimento ao cliente, 
      educação e até suporte psicológico. Críticos afirmam que a legislação pode engessar a inovação, enquanto 
      defensores acreditam que a medida é fundamental para proteger os usuários em situações de vulnerabilidade. 
      O debate promete ganhar força nos próximos meses.`,
      link: "/post-ai-chatbot-law"
    }
  ];

    const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPost, setModalPost] = useState(null);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  function getVisibleCards() {
    const width = window.innerWidth;
    if (width <= 768) return 1;
    if (width <= 1024) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => {
      const updated = getVisibleCards();
      setVisibleCards(updated);
      setCurrentIndex(0); // reset position
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextPost = () => {
    if (currentIndex < posts.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevPost = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(posts.length - visibleCards);
    }
  };

  const openModal = (post) => {
    setModalPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalPost(null);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextPost,
    onSwipedRight: prevPost,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const cardWidthPercentage = 100 / visibleCards;
  const translateX = -(currentIndex * (100 / posts.length));

  return (
    <section className="blog-section">
      <h2>Últimas Postagens</h2>

      <div className="blog-carousel" {...handlers}>
        <button className="carousel-button prev" onClick={prevPost}>
          <span>&#10094;</span>
        </button>

        <div className="carousel-viewport">
          <div
            className="blog-cards"
            style={{
              width: `${(100 / visibleCards) * posts.length}%`,
              transform: `translateX(${translateX}%)`,
            }}
          >
            {posts.map((post, index) => (
              <div
                key={index}
                className="blog-card"
                style={{ width: `${cardWidthPercentage}%` }}
              >
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <button onClick={() => openModal(post)}>Leia mais</button>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-button next" onClick={nextPost}>
          <span>&#10095;</span>
        </button>
      </div>

      {isModalOpen && modalPost && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{modalPost.title}</h2>
            <p>{modalPost.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;