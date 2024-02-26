/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';
import { Menu } from '../Menu';

import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import explorer from '../../assets/icons/explorer.svg';
import receipt from '../../assets/icons/receipt.svg';

import { Container } from './styles';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const isAdmin = true;

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
          {!showMenu && (
            <img src={menu} alt="menu hamburguer" onClick={handleModal} />
          )}
          {!showMenu && (
            <img src={close} alt="menu close" onClick={handleModal} />
          )} 
        </button>        
        {!showMenu && (
          <>
            <Link id="logo" to="/">
              <img src={explorer} alt="Logo foodExplorer" />
              <h1>food explorer</h1>
              {isAdmin && <span>admin</span>}
            </Link>

            <div id="search">
              <FiSearch />
              <Input
                type="search"
                placeholder="Busque por pratos ou ingredientes"
              />
            </div>

            <Link to={isAdmin ? '/new':''}>
            <Button
              id="redBtn"
              title={isAdmin ? 'Novo prato' : `Pedidos (${0})`}
              icon={isAdmin ? '' : receipt}
            />
            </Link>

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