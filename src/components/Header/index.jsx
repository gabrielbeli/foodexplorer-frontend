/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FiSearch, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
import { Button } from '../Button';
import { Menu } from '../Menu';

import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import explorer from '../../assets/icons/explorer.svg';

import { Container } from './styles';
import { TextLink } from '../TextLink';

export function Header({ onChange }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
    navigate('/');
  }

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
    <Container isAdmin={user.isAdmin}>
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
              {user.isAdmin && <span>admin</span>}
            </Link>

            <div id="search">
              <FiSearch />
              <Input
                type="search"
                placeholder="Busque por pratos ou ingredientes"
                onChange={onChange}
              />
            </div>

            {!user.isAdmin && (
              <div id="buttons">
                <TextLink 
                  name="Histórico de pedidos" to="/requests" id="historic" />
                <TextLink name="Meus favoritos" to="/favorites" id="fav" />
              </div>
            )}

            {user.isAdmin && <TextLink name="Novo prato" to="/new" id="new" />}

            <Link to={user.isAdmin ? '/requests' : '/payment'} id="receiptDesktop">
            <Button
              id="redBtn"
              title={user.isAdmin ? `Pedidos (${0})` : `(${0})`}
              icon={user.isAdmin ? IoReceiptOutline : FiShoppingCart}
            />
            </Link>

            <FiLogOut id="logout" onClick={handleSignOut} />
            <Link to={user.isAdmin ? '/requests' : '/payment'}>
              <button id="receipt">
                {user.isAdmin ? <IoReceiptOutline /> : <FiShoppingCart />}

                <span>0</span>
              </button>
            </Link>            
          </>
        )}
       {showMenu && <h2>Menu</h2>}
      </header>
      <Menu show={showMenu} onChange={onChange} />      
    </Container>
  );
}