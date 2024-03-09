/* eslint-disable react/prop-types */
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Counter } from '../Counter';
import { Button } from '../Button';
import Edit from '../../assets/icons/pencil.svg';
import photoPlaceholder from '../../assets/photoPlaceholder.png';

import { Container } from './styles';

export function Card({ dish, favorite = false }) {
  const { user } = useAuth();

  const photoUrl = dish.photo
    ? `${api.defaults.baseURL}/files/${dish.photo}`
    : photoPlaceholder;
  
  return (
    <Container>
      {user.isAdmin ? (
        <button>
          <Link to={`/edit/${dish.id}`}>
            <img src={Edit} />
          </Link>
        </button>
      ) : (
        <button>
          <FiHeart className={favorite ? 'fav' : ''} />
        </button>
      )}
      <Link to={`/dish/${dish.id}`}>
        <img src={photoUrl} alt={dish.name} />
        <h3>{dish.name} &gt;</h3>
        <p>{dish.description}</p>
        <span>R$ 
          {dish.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </Link>
      {!user.isAdmin && (
        <div>
          <Counter />
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}