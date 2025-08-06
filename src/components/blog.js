import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/blogSection.css';

const BlogSection = () => {
  const posts = [
    {
      title: "IA Revoluciona a Medicina: Diagnósticos Mais Rápidos e Precisos",
      image: "imagem1.jpg",
      content: "A inteligência artificial está transformando a medicina, tornando diagnósticos mais rápidos e precisos.",
      link: "/post1"
    },
    {
      title: "O Impacto da IA no Mercado de Trabalho: A Era dos Assistentes Digitais",
      image: "imagem2.jpg",
      content: "A IA está remodelando o mercado de trabalho, trazendo assistentes digitais para o dia a dia das empresas.",
      link: "/post2"
    },
    {
      title: "IA Criativa: Como Programas de Inteligência Artificial Estão Gerando Arte e Música Inovadora",
      image: "imagem3.jpg",
      content: "Programas de IA estão ajudando artistas a criar novas formas de arte e música, abrindo portas para a criatividade digital.",
      link: "/post3"
    },
    {
      title: "Chatbots de IA: A Nova Fronteira do Atendimento ao Cliente",
      image: "imagem4.jpg",
      content: "Chatbots de IA estão melhorando o atendimento ao cliente, fornecendo respostas rápidas e precisas.",
      link: "/post4"
    },
    {
      title: "Como a IA Está Combatendo as Mudanças Climáticas: Soluções Inteligentes para o Planeta",
      image: "imagem5.jpg",
      content: "A IA desempenha um papel essencial no combate às mudanças climáticas, prevendo padrões climáticos e otimizando recursos.",
      link: "/post5"
    },
    {
      title: "O Futuro da Educação: Como a IA Está Personalizando a Aprendizagem",
      image: "imagem6.jpg",
      content: "A IA está revolucionando a educação, oferecendo conteúdos personalizados e adaptando-se ao ritmo de aprendizado de cada aluno.",
      link: "/post6"
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