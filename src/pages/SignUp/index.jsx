import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextLink } from '../../components/TextLink';

import { api } from '../../services/api';

import { Container, Form } from './styles';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return;
    }

    if (!email.includes('@') || password.length < 6) {
      return;
    }

    try {
      await api.post('/users', { name, email, password });

      setEmail('');
      setPassword('');
      setName('');
      alert('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível cadastrar');
      }
    }
  }

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
      
      <h2>Crie sua conta</h2>

      <Input
       type="text"
       id="name"
       label="Seu nome"
       placeholder="Joao P Souza"
       required
       value={name}
       onChange={(e) => setName(e.target.value)}
      />

      <Input
       type="email"
       id="email"
       label="Email"
       placeholder="exemplo@exemplo.com.br"
       required
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />

      <Input
       type="password"
       id="password"
       label="Senha"
       placeholder="No mínimo 6 caracteres"
       minLength="6"
       required
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />

      <Button title="Criar conta" onClick={handleSignUp} />
      <TextLink name="Já tenho uma conta" to={-1}/>

    </Form>
  </Container>
  );
}