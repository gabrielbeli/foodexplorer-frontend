/* eslint-disable react/prop-types */
import { Container } from './styles';

export function TextLink({ name, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {name}
    </Container>
  );
}