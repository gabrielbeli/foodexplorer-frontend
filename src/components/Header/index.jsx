/* eslint-disable react/prop-types */
import { FiLogOut, FiShoppingCart } from 'react-icons/fi'
import { IoReceiptOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'

import { useAuth } from '../../contexts/auth'

import { Button } from '../Button'

import menu from '../../assets/icons/menu.svg'
import explorer from '../../assets/icons/explorer.svg'

import { Container } from './styles'
import { TextLink } from '../TextLink'
import { Search } from './components/Search'
import { Menu } from './components/Menu'
import { useState } from 'react'
import { PurchaseContext } from '../../contexts/purchase'
import { useContextSelector } from 'use-context-selector'
import { useEffect } from 'react'

export function Header({ onSetSearch }) {
  const [open, setOpen] = useState(false)
  const [totalItems, setTotalItems] = useState(0)

  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const { userRequests, userPurchases } = useContextSelector(
    PurchaseContext,
    ({ userRequests, userPurchases }) => ({ userRequests, userPurchases }),
  )
  
  const purchasesPending = userPurchases.filter(
    (purchase) => purchase.status === 'pending',
  )

  function handleCloseMenu() {
    setOpen(false)
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  useEffect(() => {
    const total = userRequests.reduce((accumulator, request) => accumulator + request.quantity, 0)

    setTotalItems(total)
  }, [userRequests])
  
  return (
    <Container $isAdmin={user.isAdmin}>
     <header>
      <Dialog.Root open={open} onOpenChange={() => setOpen(!open)}>
        <Dialog.Trigger asChild>
          <button id="menuBurgue">
            <img src={menu} alt="menu hambúrguer" />
          </button>
        </Dialog.Trigger>
        <Menu onCloseMenu={handleCloseMenu} onSetSearch={onSetSearch} />
      </Dialog.Root>
      <>
        <Link id="logo" to="/">
          <img src={explorer} alt="Logo foodExplorer" />
          <h1>food explorer</h1>
          {user.isAdmin && <span>admin</span>}
        </Link>

        <Search onSetSearch={onSetSearch} id="search" />

          {!user.isAdmin && (
            <div id="buttons">
              <TextLink
                name="Histórico de pedidos"
                to="/requests"
                id="historic"
              />
              <TextLink 
                name="Meus favoritos"
                to="/favorites"
                id="fav"
              />
            </div>
          )}
          {user.isAdmin && 
            <TextLink name="Novo prato" to="/new" id="new" />}
            
            <Link
              to={user.isAdmin ? '/requests' : '/payment'}
              id="receiptDesktop"
            >
              <Button
                id="redBtn"
                title={
                  user.isAdmin
                  ? `Pedidos (${purchasesPending.length})`
                  : `(${totalItems})`
                }
                icon={user.isAdmin ? IoReceiptOutline : FiShoppingCart}
              />
            </Link>

            <FiLogOut id="logout" onClick={handleSignOut} />
            <Link to={user.isAdmin ? '/requests' : '/payment'}>
              <button id="receipt">
                {user.isAdmin ? <IoReceiptOutline /> : <FiShoppingCart />}
                  <span>
                    {user.isAdmin ? purchasesPending.length : totalItems}
                  </span>
              </button>
            </Link>
          </>                
      </header>
    </Container>
  )
}