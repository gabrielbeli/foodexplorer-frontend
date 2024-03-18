/* eslint-disable react/prop-types */
import { forwardRef } from 'react'
import { Container } from './styles'

export const Input = forwardRef(({ id, label, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...rest} />
    </Container>
  )
})

Input.displayName = 'Input'