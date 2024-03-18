import { toast } from 'react-toastify'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'
import { useForm } from 'react-hook-form'

import { api } from '../../services/api'

import { Container, Form } from './styles'
import { useAuth } from '../../contexts/auth'

const signUpSchema = zod.object({
  name: zod.string(),
  email: zod.string(),
  password: zod.string().min(6, 'A senha deve ter no mínimo 6 dígitos.'),
})

export function SignUp() {
  const { signIn } = useAuth()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  async function handleSignUp(data) {
    const { name, email, password } = data

    try {
      await api.post('/users', { name, email, password })

      toast.success('Cadastro realizado com sucesso!')
      await signIn({ email, password })
      navigate('/')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível cadastrar')
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
    <Form onSubmit={handleSubmit(handleSignUp)}>      
      <h2>Crie sua conta</h2>

      <Input
       type="text"
       id="name"
       label="Seu nome"
       placeholder="Joao P Souza"
       required
       {...register('name')}
      />

      <Input
       type="email"
       id="email"
       label="Email"
       placeholder="exemplo@exemplo.com.br"
       required
       {...register('email')}
      />

      <Input
       type="password"
       id="password"
       label="Senha"
       placeholder="No mínimo 6 caracteres"
       minLength="6"
       required
       {...register('password')}
      />

      <Button title="Criar conta" disabled={isSubmitting} />
      <TextLink name="Já tenho uma conta" to={-1}/>

    </Form>
  </Container>
  );
}