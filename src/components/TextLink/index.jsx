/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function TextLink({name, icon, ...rest}) {
  return (
    <Container {...rest}>
      { icon && (<img src={icon} />) }
      {name}
    </Container>
  )
}