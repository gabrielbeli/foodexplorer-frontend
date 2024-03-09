/* eslint-disable react/jsx-key */
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section'

import foots100 from '../../assets/foots-100.svg';
import foots200 from '../../assets/foots-200.svg';

import { Container, Banner } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';


export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/?search=${search}`);
      setDishes(response.data);
      console.log(response.data);
    }

    fetchDishes();
  }, [search]);
   return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />
      <Banner>
        <picture>
        <source media="(max-width: 768px)" srcSet={foots100} />
          <img src={foots200} alt="" />
        </picture>
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>
      <main>
        
        <Section 
          title="Refeições"
          cards={dishes.map((dish) => {
            if (dish.category == 'meals') {
              return <Card dish={dish} />;
            }
          })}
        />

        <Section 
          title="Sobremesas"
          cards={dishes.map((dish) => {
            if (dish.category == 'dessert') {
              return <Card dish={dish} />;
            }
          })}
        />

        <Section 
          title="Bebidas"
          cards={dishes.map((dish) => {
            if (dish.category == 'drink') {
              return <Card dish={dish} />
            }
          })}
        />
      </main>
      <Footer />
    </Container>
  );
}