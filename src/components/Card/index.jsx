/* eslint-disable react/prop-types */
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import Edit from '../../assets/icons/pencil.svg';
import photoPlaceholder from '../../assets/photoPlaceholder.png';

import { Counter } from '../Counter';
import { Button } from '../Button';

import { Container } from './styles';

export function Card({ dish }) {
  const [favorite, setFavorite] = useState(false);
  const [idFavorite, setIdFavorite] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();

  const photoUrl = dish.photo
    ? `${api.defaults.baseURL}/files/${dish.photo}`
    : photoPlaceholder;
  
  async function handleRequest() {
    await api.post('/requests', { quantity,dish_id: dish.id });
  }
  
  async function handleFavorite() {

    if (favorite) {
      await api.delete(`/favorites/${idFavorite}`);
      setFavorite(false);
    } else {
      const { id } = await api.post('/favorites', { dish_id: dish.id });
      setFavorite(true);
      setIdFavorite(id);
    }
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get('/favorites');

      const favorite = response.data.find(
        (favorite) => favorite.dish_id === dish.id
      );
      setFavorite(favorite ? true : false);
      setIdFavorite(favorite ? favorite.id : null);
    }

    fetchFavorites();
  }, []);
  
  return (
    <Container>
      {user.isAdmin ? (
        <button>
          <Link to={`/edit/${dish.id}`}>
            <img src={Edit} />
          </Link>
        </button>
      ) : (
        <button onClick={handleFavorite}>
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
          <Counter quantity={quantity} setQuantity={setQuantity} />
          <Button title="incluir" onClick={handleRequest} />
        </div>
      )}
    </Container>
  );
}