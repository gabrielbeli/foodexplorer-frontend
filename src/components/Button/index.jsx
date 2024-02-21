/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Button({ icon, onclick, title, ...rest}) {
  return (
    <Container {...rest}>
      {icon && <img src={icon} alt="" />}
      {title}      
    </Container>
  );
}