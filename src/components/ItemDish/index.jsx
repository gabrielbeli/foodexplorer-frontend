/* eslint-disable react/prop-types */
import { Container } from './styles';

export function ItemDish({ quantity, name, amount, img, btnTitle, ...rest}) {
  return (
    <Container>
      <img src={img} alt={name} />
      <div>
        <h2>
          {quantity && (`${quantity} x -`)} {name}{' '}
          {amount && <small>R$ {amount}</small>}
        </h2>
        <button {...rest}>{btnTitle}</button>
      </div>
    </Container>
  );
}