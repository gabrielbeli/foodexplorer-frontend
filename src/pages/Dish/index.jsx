/* eslint-disable react/prop-types */
import { Container, Content } from './styles';
import { FiChevronLeft } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextLink } from '../../components/TextLink';
import { Ingredients } from '../../components/Ingredients';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

import ravanello from '../../assets/ravanello.png';

export function Dish() {
  const isAdmin = false;
  
  return (
    <Container>
      <Header />
      <TextLink name="voltar" icon={FiChevronLeft} to={-1} />
      <main>
        <Content isAdmin={isAdmin}>
          <img src={ravanello} alt="" />
          
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
              <Link to={isAdmin ? `/edit/1` : ''}>
              <Button
                title={isAdmin ? 'Editar prato' : 'pedir ∙ R$ 25,00'}
                icon={isAdmin ? undefined : IoReceiptOutline}
              />
              </Link>
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}