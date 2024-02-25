import { Container } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import foots100 from '../../assets/foots-100.svg';
import foots200 from '../../assets/foots-200.svg';

export function Home() {
  return (
    <Container>
      <Header />
      <main>
      <div>
        <picture>
          <source media="(max-width: 640px)" srcSet={foots100} />
          <img src={foots200} alt="" />
        </picture>
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </div>
        <Card
          dish={{
            image: 'https://github.com/gabrielbeli',
            name: 'Torradas de Parma',
            description: 'Presunto de parma e rucula em um  pão com fermentação natural',
            price: '25,97'
          }}
        />
      </main>
      <Footer />
    </Container>
  );
}