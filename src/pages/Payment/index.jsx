import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import photoPlaceholder from '../../assets/photoPlaceholder.png';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemDish } from '../../components/ItemDish';
import { Button } from '../../components/Button';
import { ItemPayment } from '../../components/ItemPayment';

import { Container, Content } from './styles';

export function Payment() {
  const [requests, setRequests] = useState([]);
  const [total, setTotal] = useState(0);

  async function handleRemoveRequest(id) {
    await api.delete(`/requests/${id}`);
    setRequests((prevState) =>
    prevState.filter((request) => request.id !== id )
    );
  }

  useEffect(() => {
    const sum = requests.reduce((acc, request) => acc + request.subTotal, 0);
    setTotal(sum);
  }, [requests]);

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get('/requests');
      setRequests(response.data);
    }

    fetchRequests();
  }, []);

  return (
  <Container>
    <Header />
    <main>
      <Content>
        <section id="order">
          <h1>Meu pedido</h1>
          <ul>
            {requests.map((request) => (
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
  );
}
