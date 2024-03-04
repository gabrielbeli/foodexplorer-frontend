import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemDish } from '../../components/ItemDish';

import { Container, Content } from './styles';
import photoPlaceholder from '../../assets/photoPlaceholder.png';

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
                img={photoPlaceholder}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={photoPlaceholder}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={photoPlaceholder}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={photoPlaceholder}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={photoPlaceholder}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={photoPlaceholder}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={photoPlaceholder}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <ItemDish
                img={photoPlaceholder}
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