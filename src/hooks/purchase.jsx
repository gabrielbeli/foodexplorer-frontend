/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { useAuth } from './auth'

const PurchaseContext = createContext({})

function PurchaseProvider({ children }) {
  const [data, setData] = useState({
    requests: [],
    purchases: [],
  })

  const { user } = useAuth()

  async function createPurchases() {
    const newPurchase = await api.post('purchases').then((res) => res.data)
    setData((prevState) => ({
      ...prevState,
      purchases: [...prevState.purchases, newPurchase],
      requests: [],
    }))
  }

  async function updateStatusPurchase({ purchaseId, status }) {
    const updatedAt = await api
      .patch(`purchases/${purchaseId}`, { status })
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

  async function createRequests({ quantity, dishId }) {
    const newRequest = await api
      .post('/requests', {
        quantity,
        dish_id: dishId,
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
      requests: state.requests.filter((request) => request.id !== requestId),
    }))
  }

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const requests = await api.get('/requests').then((res) => res.data)

        const purchases = await api.get('/purchases').then((res) => res.data)
        setData({ requests, purchases })
      }
    }

    fetchData()
  }, [user])
  return (
    <PurchaseContext.Provider
      value={{
        userRequests: data.requests,
        userPurchases: data.purchases,
        removeRequest,
        createRequests,
        createPurchases,
        updateStatusPurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}

function usePurchase() {
  const context = useContext(PurchaseContext)
  return context
}

export { PurchaseProvider, usePurchase }