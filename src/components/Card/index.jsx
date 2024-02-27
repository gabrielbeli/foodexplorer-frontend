/* eslint-disable react/prop-types */
import { FiHeart } from 'react-icons/fi';
import Edit from '../../assets/icons/pencil.svg';
import { Link } from 'react-router-dom'

import { Container } from './styles';

import { Counter } from '../Counter';
import { Button } from '../Button';

export function Card({ dish, favorite = false }) {
  const isAdmin = true;
  
  return (
    <Container>
      {isAdmin ? (
        <button>
          <Link to="/edit/1">
            <img src={Edit} />
          </Link>
        </button>
      ) : (
        <button>
          <FiHeart className={favorite ? 'fav' : ''} />
        </button>
      )}
      <Link to="/dish/2">
        <img src={dish.image} alt={dish.name} />
        <h3>{dish.name} &gt;</h3>
        <p>{dish.description}</p>
        <span>R$ {dish.price}</span>
      </Link>
      {isAdmin && (
        <div>
          <Counter />
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}