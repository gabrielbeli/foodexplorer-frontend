import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemDish } from '../../components/ItemDish';
import { Button } from '../../components/Button';

import { Container, Content } from './styles';
import ravanello from '../../assets/ravanello.png';

export function Payment() {
  return (
  <Container>
    <Header />
    <main>
      <Content>
        <section id="order">
          <h1>Meu pedido</h1>
          <ul>
            <li>
              <ItemDish
                img={ravanello}
                quantity={1}
                name={`Salada Radish`}
                amount={25.97}
                btnTitle="Excluir"
              />
            </li>

            <li>
              <ItemDish
                img={ravanello}
                quantity={1}
                name={`Salada Radish`}
                amount={25.97}
                btnTitle="Excluir"
              />
            </li>

            <li>
              <ItemDish
                img={ravanello}
                quantity={1}
                name={`Salada Radish`}
                amount={25.97}
                btnTitle="Excluir"
              />
            </li>

            <li>
              <ItemDish
                img={ravanello}
                quantity={1}
                name={`Salada Radish`}
                amount={25.97}
                btnTitle="Excluir"
              />
            </li>
          </ul>

          <p>Total: R$103.88</p>
        </section>

        <Link>
          <Button title="Avançar" />
        </Link>

        ,<section id='payment'>
          <h1>Pagamento</h1>
        </section>
      </Content>
    </main>
    <Footer />
  </Container>
  );
}
