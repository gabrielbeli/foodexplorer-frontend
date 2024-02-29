/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FiSearch, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';
import { Menu } from '../Menu';

import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import explorer from '../../assets/icons/explorer.svg';

import { Container } from './styles';
import { TextLink } from '../TextLink';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const isAdmin = false;

  let scrollTop;
  let scrollLeft; 

  function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  function handleModal() {
    setShowMenu((prevState) => !prevState);
  }

  useEffect(() => {
    enableScroll();
    function handleResize() {
      if (window.innerWidth > 768) {
        setShowMenu(false);
        enableScroll();
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
            <img 
              src={menu} 
              alt="menu hamburguer" 
              onClick={() => {
                handleModal();
                disableScroll();
              }} 
            />
          )}
          {!showMenu && (
            <img 
              src={close} 
              alt="menu close" 
              onClick={() => {
                handleModal();
                enableScroll();
              }} 
            />
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

            {!isAdmin && (
              <div id="buttons">
                <TextLink name="Histórico de pedidos" to="" id="historic" />
                <TextLink name="Meus favoritos" to="" id="fav" />
              </div>
            )}

            {isAdmin && <TextLink name="Novo prato" to="/new" id="new" />}

            <Link to={isAdmin ? '':'/payment'} id="receiptDesktop">
            <Button
              id="redBtn"
              title={isAdmin ? `Pedidos (${0})` : `(${0})`}
              icon={isAdmin ? IoReceiptOutline : FiShoppingCart}
            />
            </Link>

            <FiLogOut id="logout" />

            <button id="receipt">
              {isAdmin ? <IoReceiptOutline /> : <FiShoppingCart />}

              <span>0</span>
            </button>            
          </>
        )}
       {showMenu && <h2>Menu</h2>}
      </header>
      <Menu show={showMenu} />      
    </Container>
  );
}