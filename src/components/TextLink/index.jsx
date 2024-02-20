/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function TextLink({name, ...rest}) {
  return (
    <Container {...rest}>
      {name}
    </Container>
  )
}