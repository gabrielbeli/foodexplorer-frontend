import { Container } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Card
          dish={{
            name: 'Torradas de Parma',
            image: 'parma'
          }}
        />
      </main>
      <Footer />
    </Container>
  );
}