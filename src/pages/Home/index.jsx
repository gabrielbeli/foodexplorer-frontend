import { Container, Section, Banner } from './styles';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import foots100 from '../../assets/foots-100.svg';
import foots200 from '../../assets/foots-200.svg';

export function Home() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  
  return (
    <Container>
      <Header />
      <Banner>
        <picture>
        <source media="(max-width: 640px)" srcSet={foots100} />
          <img src={foots200} alt="" />
        </picture>
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>
      <main>
        <Section>
          <h2>Pratos principais</h2>

          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: 'grabbing' }}
           >
            <motion.div
              className="inner"
              drag="X"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
             >            
             <motion.div className="item">
              <Card
               dish={{
                image: 'https://github.com/gabrielbeli',
                name: 'Torradas de Parma',
                description: 'Presunto de parma e rucula em um pão com fermentação natural',
                price: '25,97'
               }}
              />
             </motion.div>
             <motion.div className="item">
              <Card
               dish={{
                image: 'https://github.com/gabrielbeli',
                name: 'Torradas de Parma',
                description: 'Presunto de parma e rucula em um pão com fermentação natural',
                price: '25,97'
               }}
              />
             </motion.div>
             <motion.div className="item">
              <Card
               dish={{
                image: 'https://github.com/gabrielbeli',
                name: 'Torradas de Parma',
                description: 'Presunto de parma e rucula em um pão com fermentação natural',
                price: '25,97'
               }}
              />
             </motion.div>            
           </motion.div>
         </motion.div>
        </Section>

        <Section>
          <h2>Bebidas</h2>

          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              className="inner"
              drag="X"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
             >            
             <motion.div className="item">
              <Card
               dish={{
                image: 'https://github.com/gabrielbeli',
                name: 'Torradas de Parma',
                description: 'Presunto de parma e rucula em um pão com fermentação natural',
                price: '25,97'
               }}
              />
             </motion.div>
             <motion.div className="item">
              <Card
               dish={{
                image: 'https://github.com/gabrielbeli',
                name: 'Torradas de Parma',
                description: 'Presunto de parma e rucula em um pão com fermentação natural',
                price: '25,97'
               }}
              />
             </motion.div>
             <motion.div className="item">
              <Card
               dish={{
                image: 'https://github.com/gabrielbeli',
                name: 'Torradas de Parma',
                description: 'Presunto de parma e rucula em um pão com fermentação natural',
                price: '25,97'
               }}
              />
             </motion.div>            
           </motion.div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}