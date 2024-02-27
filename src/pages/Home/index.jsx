/* eslint-disable react/jsx-key */
import { Container, Banner } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section'

import foots100 from '../../assets/foots-100.svg';
import foots200 from '../../assets/foots-200.svg';

export function Home() {
   return (
    <Container>
      <Header />
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
          cards={[
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
          dish={{
            image: 'https://github.com/gabrielbeli',
            name: 'Torradas de Parma',
            description: 'Presunto de parma e rucula em um pão com fermentação natural',
            price: '25,97',
          }}
        />,
        <Card
          dish={{
            image: 'https://github.com/gabrielbeli',
            name: 'Torradas de Parma',
            description: 'Presunto de parma e rucula em um pão com fermentação natural',
            price: '25,97',
          }}
        />,
         ]}
        ></Section>

        <Section 
          title="Sobremesas"
          cards={[
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
          dish={{
            image: 'https://github.com/gabrielbeli',
            name: 'Torradas de Parma',
            description: 'Presunto de parma e rucula em um pão com fermentação natural',
            price: '25,97',
          }}
        />,
        <Card
          dish={{
            image: 'https://github.com/gabrielbeli',
            name: 'Torradas de Parma',
            description: 'Presunto de parma e rucula em um pão com fermentação natural',
            price: '25,97',
          }}
        />,
         ]}
        ></Section>

        <Section 
          title="Bebidas"
          cards={[
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
            dish={{
              image: 'https://github.com/gabrielbeli',
              name: 'Torradas de Parma',
              description: 'Presunto de parma e rucula em um pão com fermentação natural',
              price: '25,97',
            }}
          />,
          <Card
          dish={{
            image: 'https://github.com/gabrielbeli',
            name: 'Torradas de Parma',
            description: 'Presunto de parma e rucula em um pão com fermentação natural',
            price: '25,97',
          }}
        />,
        <Card
          dish={{
            image: 'https://github.com/gabrielbeli',
            name: 'Torradas de Parma',
            description: 'Presunto de parma e rucula em um pão com fermentação natural',
            price: '25,97',
          }}
        />,
         ]}
        ></Section>        
      </main>
      <Footer />
    </Container>
  );
}