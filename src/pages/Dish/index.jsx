/* eslint-disable react/prop-types */
import { Container, Content } from './styles';
import { FiChevronLeft } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextLink } from '../../components/TextLink';
import { Ingredients } from '../../components/Ingredients';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

import ravanello from '../../assets/ravanello.png';

export function Dish() {
  const { user } = useAuth();
  
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <TextLink name="voltar" icon={FiChevronLeft} to={-1} />
      </div>

      <main>
        <Content isAdmin={user.isAdmin}>
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
              {!user.isAdmin && <Counter quantity="5" />}
              <Link to={user.isAdmin ? `/edit/1` : ''}>
              <Button
                title={user.isAdmin ? 'Editar prato' : 'pedir ∙ R$ 25,00'}
                icon={user.isAdmin ? undefined : IoReceiptOutline}
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