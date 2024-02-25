/* eslint-disable react/prop-types */
import { FiHeart } from 'react-icons/fi';
import Edit from '../../assets/icons/pencil.svg';

import { Container } from './styles';

import { Counter } from '../Counter';
import { Button } from '../Button';

export function Card({ dish, isAdmin = false, favorite = false }) {
  return (
    <Container>
      {isAdmin ? (
        <button>
          <img src={Edit} />
        </button>
      ) : (
        <button>
          <FiHeart className={favorite ? 'fav' : ''} />
        </button>
      )}
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name} &gt;</h3>
      <span>R$ {dish.price}</span>
      {isAdmin && (
        <div>
          <Counter />
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}