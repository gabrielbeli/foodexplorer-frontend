import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemDish } from '../../components/ItemDish';

import { Container, Content } from './styles';
import ravanello from '../../assets/ravanello.png';

export function Favorites() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <h1>Meus favoritos</h1>

          <ul>
            <li>
              <ItemDish
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>

          </ul>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}