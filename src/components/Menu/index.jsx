/* eslint-disable react/prop-types */
import { FiSearch } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { TextLink } from '../TextLink';
import { Input } from '../Input';
import { Footer } from '../Footer';

import { Container } from './styles';

export function Menu({ show, onChange }) {
  const { user, signOut } = useAuth;

  function handleSignOut() {
    signOut();
  }
  
  return (
    <Container className={`menu ${show ? 'show' : ''}`}>
      <div className="menu-content">
        <div id="search">
          <FiSearch />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
          />
        </div>

        <ul>
          {user.isAdmin && (
            <li>
              <TextLink name="Novo prato" to="/new" />
            </li>
          )}
          {!user.isAdmin && (
            <li>
              <TextLink name="Histórico de pedidos" to="/requests" />
            </li>
          )}
          {!user.isAdmin && (
            <li>
              <TextLink name="Meus favoritos" to="/favorites" />
            </li>
          )}
          <li>
            <TextLink name="Sair" to={'/'} onClick={handleSignOut} />
          </li>
        </ul>
      </div>
      <Footer />
    </Container>
  );
}
