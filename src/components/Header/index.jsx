/* eslint-disable react/prop-types */
import { FiSearch, FiLogOut } from 'react-icons/fi';

import { Input } from '../Input';
import { Button } from '../Button';

import menu from '../../assets/icons/menu.svg';
import explorer from '../../assets/icons/explorer.svg';
import receipt from '../../assets/icons/Receipt.svg';

import { Container } from './styles';

export function Header({ isAdmin = false}) {
  return (
    <Container isAdmin={isAdmin}>
     <div>
        <button>
          <img src={menu} alt="menu hamburguer" />
        </button>
       
       <div>
        <img src={explorer} alt="logo foodExplorer" />
        <h1>food explorer</h1>
        {isAdmin && <span>admin</span>}
       </div>      

       <div id="search">
        <FiSearch />
        <Input
          type="search"
          placeholder="Busque por pratos ou ingredientes"
        />
       </div>

       <Button
        title={isAdmin ? 'Novo prato' : `Pedidos (${0})`}
        icon={isAdmin ? '' : receipt}
       />

       <FiLogOut />

       {!isAdmin && (
        <button>
          <img src={receipt} alt="icone de uma nota fiscal" />
          <span>0</span>
        </button>
       )}
      </div>
    </Container>
  );
}