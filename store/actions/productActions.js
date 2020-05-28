import actiontypes from '../actiontypes'
// import axios from 'axios'

export const getProduct = (id) => {
    return async dispatch => {
        // const res = await axios.get('http://localhost:9999/api/products/' + id)

        const res = {
            data: {id: 1, name: 'product 1', desc: 'this is product 1', price: 100 }
        }

        dispatch(setProduct(res.data))
    }
  }

export const setProduct = (product) => {
    return {
        type: actiontypes().product.set,
        payload: product
    }
}