/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Button({ icon: Icon, onclick, title, ...rest}) {
  return (
    <Container onclick={onclick}>
      {Icon && <Icon />}
      <button {...rest}>
        {title}
      </button>
    </Container>
  );
}