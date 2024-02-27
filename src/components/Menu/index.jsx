/* eslint-disable react/prop-types */
import { FiSearch } from 'react-icons/fi';

import { TextLink } from '../TextLink';
import { Input } from '../Input';
import { Footer } from '../Footer';

import { Container } from './styles';

export function Menu({ show }) {
  const isAdmin = true;
  
  return (
    <Container className={`menu ${show ? 'show' : ''}`}>
      <div className="menu-content">
        <div id="search">
          <FiSearch />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <ul>
          {isAdmin && (
            <li>
              <TextLink name="Novo prato" to="/new" />
            </li>
          )}
          {!isAdmin && (
            <li>
              <TextLink name="Histórico de pedidos" to="" />
            </li>
          )}
          {!isAdmin && (
            <li>
              <TextLink name="Meus favoritos" to="" />
            </li>
          )}
          <li>
            <TextLink name="Sair" />
          </li>
        </ul>
      </div>
      <Footer />
    </Container>
  );
}
