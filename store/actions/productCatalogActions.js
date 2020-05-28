import actiontypes from '../actiontypes'
// import axios from 'axios'

export const getProductCatalog = () => {
    return async dispatch => {
        // const res = await axios.get('http://localhost:9999/api/products')

        const res = {
            data: [
                {id: 1, name: 'product 1', desc: 'this is product 1', price: 100, quantity: 1 },
                {id: 2, name: 'product 2', desc: 'this is product 2', price: 89,  quantity: 1 },
                {id: 3, name: 'product 3', desc: 'this is product 3', price: 199, quantity: 1 },
                {id: 4, name: 'product 4', desc: 'this is product 4', price: 522, quantity: 1 }
            ]
        }
        dispatch(setProductCatalog(res.data))
    }
  }

export const setProductCatalog = (products) => {
    return {
        type: actiontypes().productCatalog.set,
        payload: products
    }
}