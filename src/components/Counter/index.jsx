import { Container } from './styles';
import { Fiplus, FiMinus } from 'react-icons/fi';

export function Counter({ quantity }) {
  quantity = String(quantity).padStart(2, '0');
  return (
    <Container>
      <button>
        <FiMinus />
      </button>
      {quantity}

      <button>
        <Fiplus />
      </button>
    </Container>
  );
}