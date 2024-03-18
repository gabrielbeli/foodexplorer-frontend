import { Link } from 'react-router-dom'

import photoPlaceholder from '../../assets/photoPlaceholder.png'
import { api } from '../../services/api'

import { ItemDish } from '../../components/ItemDish'
import { Button } from '../../components/Button'
import { ItemPayment } from '../../components/ItemPayment'

import { Container } from './styles'
import { PurchaseContext } from '../../contexts/purchase'
import { useContextSelector } from 'use-context-selector'

export function Payment() {
  const { removeRequest, userRequests } = useContextSelector(
    PurchaseContext,
    ({ removeRequest, userRequests }) => ({ removeRequest, userRequests }),
  )

  async function handleRemoveRequest(id) {
    await removeRequest(id)
  }

  const total = userRequests.reduce((acc, request) =>
    acc + request.subTotal, 0)

  return (
  <Container>
    <section id="order">
      <h1>Meu pedido</h1>
        <ul>
          {userRequests.map((request) => (
            <li key={String(request.id)}>
              <ItemDish
                img={
                  request.photo
                    ? `${api.defaults.baseURL}/files/${request.photo}`
                    : photoPlaceholder
                }
                dishId={request.dish_id}
                quantity={request.quantity}
                name={request.dish_name}
                amount={request.subTotal}
                onClick={() => handleRemoveRequest(request.id)}
                btnTitle="Excluir"
              />
            </li>
          ))}
        </ul>
          <p>
            Total:{' '} 
            <span>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </p>
    </section>

    <Link to="/payment-only">
      <Button title="Avançar" />
    </Link>

    <section id="payment">
      <h1>Pagamento</h1>
        <ItemPayment />
    </section>      
  </Container>
  )
}
