import { StatusSelect } from '../../components/StatusSelect'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useAuth } from '../../hooks/auth'

import { Container, RequestMobile } from './styles'

export function Requests() {
  const { user, userPurchases, updateStatusPurchase } = useAuth()
  
  async function handleStatus(purchaseId, status) {
    await updateStatusPurchase({purchaseId, status })
  }

  const purchasesWithDate = userPurchases.map((purchase) => {
    const created = new Date(purchase.update_at)

    created.setTime(created.getTime() - 3 * 3600000)

    const updatedAtFormatted = format(created, "dd'/'MM 'às' HH':'mm'", {
      locale: ptBR,
    })
    
    return {
      ...purchase,
      updatedAt: updatedAtFormatted,
    }
  })  
  .reverse()

  return (
    <Container>
      {user.isAdmin ? <h1>Pedidos</h1> : <h1>Histórico de pedidos</h1>}

      <section id="requests">
        {purchasesWithDate.map((purchase) => (
          <RequestMobile isAdmin={user.isAdmin} key={purchase.id}>
            <span className="code">{String(purchase.id).padStart(6, '0')}</span>
            <span className="time">{purchase.updatedAt}</span>

            <p className="details">{purchase.details}</p>
            <StatusSelect
              className="status"
              isDisabled={!user.isAdmin}
              value={purchase.status}
              onChange={(e) => {
                handleStatus(purchase.id, e.value)
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
            {purchasesWithDate.map((purchase) => (
              <tr key={purchase.id}>
                <td>
                  <StatusSelect
                    isDisabled={!user.isAdmin}
                    value={purchase.status}
                    onChange={(e) => {
                    handleStatus(purchase.id, e.value)
                    }}
                  />
                </td>

                <td className="code">
                  {String(purchase.id).padStart(6, '0')}
                </td>

                <td className="details">{purchase.details}</td>
                <td className="time">{purchase.updatedAt}</td>
             </tr>
            ))}
          </tbody>
        </table>
    </Container>
  )
}