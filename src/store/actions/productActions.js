import actiontypes from '../actiontypes'
import axios from 'axios'

export const getProduct = (id) => {
    return async dispatch => {
        if(typeof id === 'number' && Number.isInteger(id))
        axios.get('http://localhost:9999/api/products/' + id).then(res => {
            dispatch(setProduct(res.data))
        })
        
    }
  }

export const setProduct = (product) => {
    return {
        type: actiontypes().product.set,
        payload: product
    }
}