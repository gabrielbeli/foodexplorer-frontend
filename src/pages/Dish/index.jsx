import { Container, Content } from './styles';
import { FiChevronLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextLink } from '../../components/TextLink';
import { Ingredients } from '../../components/Ingredients'

import ravanello from '../../assets/ravanello.png';

export function Dish() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <TextLink name="Voltar" icon={FiChevronLeft} />
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={ravanello}
                type="image/png"
              />
              <img src={ravanello} alt="" />
            </picture>
          </div>

          <div>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes, molho agridoce, crotons e gergelim salpicado. 
            </p>

            <ul>
              <Ingredients name='alface' />
            </ul>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}