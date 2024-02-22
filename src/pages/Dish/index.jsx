import { Container, Content } from './styles';
import { FiChevronLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextLink } from '../../components/TextLink';
import { Ingredients } from '../../components/Ingredients';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

import ravanello from '../../assets/ravanello.png';
import receipt from '../../assets/icons/receipt.svg';

export function Dish({ isAdmin = false }) {
  return (
    <Container>
      <Header isAdmin />
      <TextLink name="voltar" icon={FiChevronLeft} />
      <main>
        <Content isAdmin={isAdmin}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={ravanello}
                type="image/png"
              />
              <img src={ravanello} alt="" />
            </picture>

          <div>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes, molho agridoce, crotons e gergelim salpicado. 
            </p>

            <ul>
              <Ingredients name='alface' />
              <Ingredients name='cebola' />
              <Ingredients name='pepino' />
              <Ingredients name='rabanate' />
              <Ingredients name='tomate' />
              <Ingredients name='pão' />
              <Ingredients name='gergelim' />
            </ul>

            <div>
              {!isAdmin && <Counter quantity="5" />}
              <Button
                title={isAdmin ? 'Editar prato' : 'pedir ∙ R$ 25,00'}
                icon={isAdmin ? undefined : receipt}
              />
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}