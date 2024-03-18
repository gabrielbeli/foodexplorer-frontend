/* eslint-disable no-empty */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function createPurchases() {
  const newPurchase = await api.post('purchases').then((res) => res.data)    
    setData((prevState) => ({
      ...prevState,
      purchases: [...prevState.purchases, newPurchase],
    }))
  }

  async function updateStatusPurchase({ purchaseId, status }) {
    const updatedAt = await api
      .patch(`purchases/${purchaseId}`, { status})
      .then((res) => res.data)

      setData((prevState) => ({
        ...prevState,
        purchases: prevState.purchases.map((purchase) =>
        purchase.id === purchaseId
          ? { ...purchase, status, updatedAt }
          : purchase,
      ),
      }))
  }  

  async function createRequests({ quantity, dishid }) {
    const newRequest = await api
      .post('/requests', {
        quantity,
        dish_id: dishid,
      })
      .then((res) => res.data)
    
    const requests = [...data.requests].filter(
      (request) => request.id !== newRequest.id,
    )
    
    requests.push(newRequest)
    setData((state) => ({
      ...state,
      requests,
    }))
  }

  async function removeRequest(requestId) {
    await api.delete(`/requests/${requestId}`)
    setData((state) => ({
      ...state,
      requests: state.requests.filter(
        (request) => request.id !== requestId),    
    }))
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })    

      const { user, token } = response.data
      
      user.isAdmin = user.isAdmin === 1
      
      localStorage.setItem(
        '@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem(
        '@foodexplorer:token', token)
      
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      
      const requests =
        (await api.get('/requests').then((res) => res.data)) || []
      
      const purchases =
        (await api.get('/purchases').then((res) => res.data)) || []

      setData({
        user,
        token,
        requests,
        purchases,
      })
      
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível entrar')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:token')

    setData({})
  }

  useEffect(() => {
    
    async function update() {
      const user = 
      localStorage.getItem(
        '@foodexplorer:user')
      const token = 
      localStorage.getItem(
        '@foodexplorer:token')

      if (user && token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`

       try {

        const requests = await api.get('/requests').then((res) => res.data)
        const purchases = await api.get('/purchases').then((res) => res.data)

          setData({
            user: JSON.parse(user),
            token,
            requests,
            purchases,
          })
        } catch (error) {}  
      }
    }
    update()   
  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
      user: data.user,
      userRequests: data.requests,
      userPurchases: data.purchases,
      createRequests,
      createPurchases,
      updateStatusPurchase,
      removeRequest,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }