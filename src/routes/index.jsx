import { BrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

import { useAuth } from '../contexts/auth'

export function Routes() {
  const { user } = useAuth()
  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}