import { FiChevronLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { TextLink } from '../../components/TextLink'
import { ItemPayment } from '../../components/ItemPayment'

import { Container, Content } from './styles'

export function PaymentOnly() {
  return (
    <Container>
      <Header />

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
      <Footer />
    </Container>
  )
}

