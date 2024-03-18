export function fetchDataAction({ requests, purchases }) {
  return {
    type: 'FETCH_DATA',
    payload: {
      requests,
      purchases,
    },
  }
}

export function createPurchaseAction(newPurchase) {
  return {
    type: 'CREATE_PURCHASE',
    payload: {
      newPurchase,
    },
  }
}

export function updateStatusPurchaseAction({ updatedAt, purchaseId, status }) {
  return {
    type: 'UPDATE_STATUS_PURCHASE',
    payload: {
      updatedAt,
      purchaseId,
      status,
    },
  }
}

export function createRequestAction(requests) {
  return {
    type: 'CREATE_REQUEST',
    payload: {
      requests,
    },
  }
}

export function removeRequestAction(requestId) {
  return {
    type: 'REMOVE_REQUEST',
    payload: {
      requestId,
    },
  }
}