import { Container } from './styles';
import { FiPlus, FiMinus } from 'react-icons/fi';

export function Counter({ quantity }) {
  quantity = String(quantity).padStart(2, '0');
  return (
    <Container>
      <button>
        <FiMinus />
      </button>
      {quantity}

      <button>
        <FiPlus />
      </button>
    </Container>
  );
}