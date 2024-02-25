/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Card({ dish }) {
  return (
    <Container>
      pic
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name} &gt;</h3>
    </Container>
  );
}