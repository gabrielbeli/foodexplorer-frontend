/* eslint-disable react/prop-types */
import { useCallback, useEffect, useReducer } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../services/api'
import { purchaseReducer } from '../reducers/purchase/reducer'
import {
  createPurchaseAction,
  createRequestAction,
  fetchDataAction,
  removeRequestAction,
  updateStatusPurchaseAction,
} from '../reducers/purchase/action'

const PurchaseContext = createContext({})

function PurchaseProvider({ children }) {
  const [data, dispatch] = useReducer(purchaseReducer, {
    requests: [],
    purchases: [],
  })

  const createPurchase = useCallback(async () => {
    const newPurchase = await api.post('purchases').then((res) => res.data)
    dispatch(createPurchaseAction(newPurchase))
  }, [])

  const updateStatusPurchase = useCallback(async ({ purchaseId, status }) => {
    const updatedAt = await api
      .patch(`purchases/${purchaseId}`, { status })
      .then((res) => res.data)

    dispatch(updateStatusPurchaseAction({ updatedAt, purchaseId, status }))
  }, [])

  const createRequest = useCallback(
    async ({ quantity, dishId }) => {
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

      dispatch(createRequestAction(requests))
    },
    [data.requests],
  )

  const removeRequest = useCallback(async (requestId) => {
    await api.delete(`/requests/${requestId}`)

    dispatch(removeRequestAction(requestId))
  }, [])

  useEffect(() => {
    async function fetchData() {
      const requests = await api.get('/requests').then((res) => res.data)

      const purchases = await api.get('/purchases').then((res) => res.data)

      dispatch(fetchDataAction({ requests, purchases }))
    }

    fetchData()
  }, [])
  return (
    <PurchaseContext.Provider
      value={{
        userRequests: data.requests,
        userPurchases: data.purchases,
        removeRequest,
        createRequest,
        createPurchase,
        updateStatusPurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}

export { PurchaseProvider, PurchaseContext }