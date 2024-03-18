import { FiChevronLeft } from 'react-icons/fi'

import { TextLink } from '../../components/TextLink'
import { ItemPayment } from '../../components/ItemPayment'

import { Container, Content } from './styles'

export function PaymentOnly() {
  return (
    <Container>
      <div className="wrapper">
        <TextLink name="voltar" icon={FiChevronLeft} to={-1} />
      </div>

      <main>
        <Content>
          <section id="payment">
            <h1>Pagamento</h1>
            <ItemPayment />
          </section>
        </Content>
      </main>
    </Container>
  )
}

