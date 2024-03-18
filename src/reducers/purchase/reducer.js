export function purchaseReducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA': {
      const { requests, purchases } = action.payload
      return { requests, purchases }
    }
    case 'CREATE_PURCHASE':
      return {
        ...state,
        purchases: [...state.purchases, action.payload.newPurchase],
        requests: [],
      }
    case 'UPDATE_STATUS_PURCHASE': {
      const { purchaseId, status, updatedAt } = action.payload

      return {
        ...state,
        purchases: state.purchases.map((purchase) =>
          purchase.id === purchaseId
            ? { ...purchase, status, updatedAt }
            : purchase,
        ),
      }
    }

    case 'CREATE_REQUEST':
      return {
        ...state,
        requests: action.payload.requests,
      }

    case 'REMOVE_REQUEST':
      return {
        ...state,
        requests: state.requests.filter(
          (request) => request.id !== action.payload.requestId,
        ),
      }
    default:
      return state
  }
}