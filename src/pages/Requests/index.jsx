import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Select } from '../../components/Select';

import { Container, Content, RequestMobile } from './styles';

export function Requests() {
  const isAdmin = false;
  return (
    <Container>
      <Header />

      <main>
        <Content>
          {isAdmin ? <h1>Pedidos</h1> : <h1>Histórico de pedidos</h1>}

          <section id="requests">
            <RequestMobile>
              <div className='info'>
                <span className='code'>000004</span>
                <span className='status'>
                  <svg
                    width="8"
                    height="8"
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="4"
                      transform="matrix(1 0 0 -1 0 8)"
                      fill="#AB222E"
                    />
                  </svg>
                  Pendente
                </span>
                <span className='time'>15/05 às 19h00</span>
              </div>
              <p className='details'>
                1 x Salada radish, 
                1 x Torradas de Parma, 
                1 x Chá de Canela, 
                1 x Suco de Maracujá
              </p>

              <Select>
                <option value="Pendente">

                  Pendente
                </option>
              </Select>
            </RequestMobile>
            <RequestMobile>
              <div className='info'>
                <span className='code'>000004</span>
                <span className='status'>
                  <svg
                    width="8"
                    height="8"
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="4"
                      transform="matrix(1 0 0 -1 0 8)"
                      fill="#AB222E"
                    />
                  </svg>
                  Pendente
                </span>
                <span className='time'>15/05 às 19h00</span>
              </div>
              <p className='details'>
                1 x Salada radish, 
                1 x Torradas de Parma, 
                1 x Chá de Canela, 
                1 x Suco de Maracujá
              </p>

              <Select>
                <option value="Pendente">

                  Pendente
                </option>
              </Select>
            </RequestMobile>
            <RequestMobile>
              <div className='info'>
                <span className='code'>000004</span>
                <span className='status'>
                  <svg
                    width="8"
                    height="8"
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="4"
                      transform="matrix(1 0 0 -1 0 8)"
                      fill="#AB222E"
                    />
                  </svg>
                  Pendente
                </span>
                <span className='time'>15/05 às 19h00</span>
              </div>
              <p className='details'>
                1 x Salada radish, 
                1 x Torradas de Parma, 
                1 x Chá de Canela, 
                1 x Suco de Maracujá
              </p>

              <Select>
                <option value="Pendente">

                  Pendente
                </option>
              </Select>
            </RequestMobile>
            <RequestMobile>
              <div className='info'>
                <span className='code'>000004</span>
                <span className='status'>
                  <svg
                    width="8"
                    height="8"
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="4"
                      transform="matrix(1 0 0 -1 0 8)"
                      fill="#AB222E"
                    />
                  </svg>
                  Pendente
                </span>
                <span className='time'>15/05 às 19h00</span>
              </div>
              <p className='details'>
                1 x Salada radish, 
                1 x Torradas de Parma, 
                1 x Chá de Canela, 
                1 x Suco de Maracujá
              </p>

              <Select>
                <option value="Pendente">

                  Pendente
                </option>
              </Select>
            </RequestMobile> 
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
            <tr>
              <td className='status'>
              <svg
                width="8"
                height="8"
                viewBox='0 0 8 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  transform="matrix(1 0 0 -1 0 8)"
                  fill="#AB222E"
                />
              </svg>
              Pendente
              </td>

              <td className='details'>
                1 x Salada radish, 
                1 x Torradas de Parma, 
                1 x Chá de Canela, 
                1 x Suco de Maracujá
              </td>
              <td className='time'>15/05 às 19h00</td>
            </tr>            
          </tbody>
          </table>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}