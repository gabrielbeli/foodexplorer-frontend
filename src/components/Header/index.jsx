/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FiSearch, FiLogOut } from 'react-icons/fi';

import { Input } from '../Input';
import { Button } from '../Button';
import { TextLink } from '../TextLink';
import { Menu } from '../Menu';

import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import explorer from '../../assets/icons/explorer.svg';
import receipt from '../../assets/icons/receipt.svg';

import { Container } from './styles';

export function Header({ isAdmin = false}) {
  const [showMenu, setShowMenu] = useState(false);

  function handleModal() {
    setShowMenu((prevState) => !prevState);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setShowMenu(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container isAdmin={isAdmin}>
     <header>
        <button id='menuBurguer'>
          <img 
            src={menu} 
            alt="menu hamburguer" 
            onClick={handleModal} />       
        </button>
        
        {!showMenu && (
          <>
            <div id="logo">
              <img src={explorer} alt="Logo foodExplorer" />
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
              id="redBtn"
              title={isAdmin ? 'Novo prato' : `Pedidos (${0})`}
              icon={isAdmin ? '' : receipt}
            />

            <FiLogOut id="logout" />

            {!isAdmin && (
              <button id="receipt">
                <img src={receipt} alt="Ícone nota fiscal" />
                <span>0</span>
              </button>
            )}
          </>
        )}
       {showMenu && <h2>Menu</h2>}
      </header>
      <Menu show={showMenu} />      
    </Container>
  );
}