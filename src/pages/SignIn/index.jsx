import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextLink } from '../../components/TextLink';

import { Container, Form } from './styles';

export function SignIn() {
  return (
    <Container>
      <h1>
        <svg
          width="39"
          height="44"
          viewBox="0 0 39 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
            fill="#065E7C"
          />
        </svg>
        food explorer
      </h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        
        <h2>Faça login</h2>

        <Input
         type="email"
         id="email"
         label="Email"
         placeholder="exemplo@email.com"
         required
        />

        <Input
         type="password"
         id="password"
         label="Senha"
         placeholder="No mínimo 6 caracteres"
         minLength="6"
         required
        />

        <Button title="Entrar" />
        <TextLink name="Criar uma conta" />

      </Form>
    </Container>
  )
}