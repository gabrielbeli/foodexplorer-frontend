/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Button({ icon, title, ...rest}) {
  return (
    <Container {...rest}>
      {icon && <img src={icon} alt="" />}
      {title}      
    </Container>
  );
}