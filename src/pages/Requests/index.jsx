import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { StatusSelect } from '../../components/StatusSelect';
import { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Content, RequestMobile } from './styles';
import { api } from '../../services/api';

export function Requests() {
  const { user } = useAuth;
  
  const [purchases, setPurchases] = useState([]);

  async function handleStatus(purchase_id, status) {
    await api.patch(`purchases/${purchase_id}`, { status });
  }

  useEffect(() => {
    async function fetchPurchases() {
      const response = await api.get('/purchases');
      const purchasesWithDate = response.data.map((purchase) => {
        const created = new Date(purchase.update_at);

        created.setTime(created.getTime() - 3 * 3600000);

        const date = created.toLocaleString('default', {
          day: '2-digit',
          month: '2-digit',
        });
        const hours = String(created.getHours()).padStart(2, '0');
        const minutes = String(created.getMinutes()).padStart(2, '0');
        const updated_at = `${date} às ${hours}:${minutes}`;

        return {
          ...purchase,
          updated_at,
        };
      });
      setPurchases(purchasesWithDate.reverse());
    }
    fetchPurchases();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Content>
          {user.isAdmin ? <h1>Pedidos</h1> : <h1>Histórico de pedidos</h1>}

          <section id="requests">
            {purchases.map((purchase) => (
              <RequestMobile isAdmin={user.isAdmin} key={purchase.id}>
                <span className='code'>
                  {String(purchase.id).padStart(6, '0')}
                </span>
                <span className="time">{purchase.updated_at}</span>

                <p className="details">{purchase.details}</p>
                <StatusSelect
                  className="status"
                  isDisabled={!user.isAdmin}
                  value={purchase.status}
                  onChange={(e) => {
                  handleStatus(purchase.id, e.value);
                  }}
                />
              </RequestMobile>
            ))}
          </section>

          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
          <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>
                <StatusSelect
                  isDisabled={!user.isAdmin}
                  value={purchase.status}
                  onChange={(e) => {
                  handleStatus(purchase.id, e.value);
                  }}
                />
              </td>

              <td className="code">
                {String(purchase.id).padStart(6, '0')}
              </td>

              <td className="details">{purchase.details}</td>
              <td className="time">{purchase.updated_at}</td>
            </tr>
              ))}
          </tbody>
          </table>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}