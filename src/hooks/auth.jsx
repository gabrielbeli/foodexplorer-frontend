/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function createRequests({ quantity, dish_id }) {
    await api.post('/requests', { quantity, dish_id });
    await updateRequests();
  }

  async function updateRequests() {
    const requests = await api.get('/requests');

    localStorage.setItem(
      '@foodexplorer:requests',
      JSON.stringify(requests.data)
    );

    setData((prevState) => ({ ...prevState, requests:
      JSON.parse(localStorage.getItem('@foodexplorer:requests')),
    }));
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });    

      const { user, token } = response.data;

      
      user.isAdmin = user.isAdmin === 1;
      
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      const requests = await api.get('/requests');
      localStorage.setItem(
        '@foodexplorer:requests',
        JSON.stringify(requests.data)
      );

      setData({
        user,
        token,
        requests:
        JSON.parse(localStorage.getItem('@foodexplorer:requests')),
      });
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar');
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user');
    localStorage.removeItem('@foodexplorer:token');

    setData({});
  }

  useEffect(() => {
    
    async function update() {
      const user = localStorage.getItem('@foodexplorer:user');
      const token = localStorage.getItem('@foodexplorer:token');

      if (user && token) {
        api.defaults.headers.common['Authorization'] `Bearer ${token}`;

        const response = await api.get('/requests');
        localStorage.setItem( '@foodexplorer:requests', JSON.stringify(response.data));

        setData({
          user: JSON.parse(user),
          requests: JSON.parse(localStorage.getItem('@foodexplorer:requests')),
          token,
        });
      }
    }

    update();    
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
      user: data.user,
      userRequests: data.requests,
      createRequests,
      updateRequests,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };