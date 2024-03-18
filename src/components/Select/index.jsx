/* eslint-disable react/prop-types */
import { Container } from "./styles"
import { forwardRef } from "react"

export const Select = forwardRef(({ children, ...rest }, ref) => {
  return (
    <Container ref={ref} {...rest}>
      {children}
    </Container>
  )
})

Select.displayName = 'Select'