import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import photoPlaceholder from '../../assets/photoPlaceholder.png'
import { api } from '../../services/api'

import { useAuth} from '../../hooks/auth'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ItemDish } from '../../components/ItemDish'
import { Button } from '../../components/Button'
import { ItemPayment } from '../../components/ItemPayment'

import { Container, Content } from './styles'

export function Payment() {
  const [total, setTotal] = useState(0)

  const { updateRequests, userRequests } = useAuth()

  async function handleRemoveRequest(id) {
    await api.delete(`/requests/${id}`)
    await updateRequests()
  }

  useEffect(() => {
    const sum = userRequests.reduce((acc, request) => acc + request.subTotal, 0);
    setTotal(sum)
  
  }, [userRequests])

  return (
  <Container>
    <Header />
    <main>
      <Content>
        <section id="order">
          <h1>Meu pedido</h1>
          <ul>
            {userRequests.map((request) => (
              <li key={String(request.id)}>
                <ItemDish
                  img={
                    request.photo
                      ?
                    `${api.defaults.baseURL}/files/${request.photo}`
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
      </Content>
    </main>
    <Footer />
  </Container>
  )
}
