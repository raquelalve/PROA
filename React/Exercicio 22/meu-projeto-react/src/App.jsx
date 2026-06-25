import React from 'react';
import './App.css'; 
import Header from './Header';
import InfoSection from './SeçãoInfo';
import ProductGallery from './Galeria';
import ContactSection from './SeçãoCont';
import Footer from './Footer';

const App = () => {
 
  const produtos = [
    { image: "../public/guitarrinha.jpg", name: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE", price: "R$989,50" },
    { image: "../public/guitarrinha.jpg", name: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE", price: "R$989,50" },
    { image: "../public/guitarrinha.jpg", name: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE", price: "R$989,50" },
    { image: "../public/guitarrinha.jpg", name: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE", price: "R$989,50" }
  ];

  return (
    <main>
      <Header />
      
      <InfoSection 
        id="section1"
        title="Nossa Loja - Instrumentos Musicais"
        text="Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!"
        imgSrc="../public/loja.jpg"
      />

      <ProductGallery products={produtos} />

<InfoSection
  id="section3"
  title="Nossa Loja - Instrumentos Musicais"
  text="Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradável para toda a família!"
  reverse={true}
>
</InfoSection>


      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;