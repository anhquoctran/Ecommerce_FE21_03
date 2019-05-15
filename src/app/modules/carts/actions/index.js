import * as types from '../constants/ActionType';

export const actionBuyProduct = (product, quantity) => {
  return {
    type: types.BUY_PRODUCT,
    product,
    quantity
  }
}

export const actionUpdateProduct = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
    quantity
  }
}

export const actionDeleteProduct = (product) => {
  return {
    type: types.DELETE_PRODUCT,
    product,
  }
}
