import actiontypes from '../actiontypes'
import jwt from 'jsonwebtoken'
import { CartProduct } from '../../models/CartProduct.ts'
const secretKey = 'c218b83b09494a81bf7afe03e160b1cf'
const cartStorageName = 'c_' + secretKey

const initState = jwt.decode(localStorage.getItem(cartStorageName)) || {
    shoppingcart: [],
    totalCartQuantity: 0,
    totalCartAmount: 0
}

export default (state = initState, action) => {
    let itemIndex


    switch (action.type) {
        case actiontypes().cart.add:
            try {
                itemIndex = state.shoppingcart.findIndex(product => product._id === action.product._id)

                if (itemIndex < 0) {
                    const toAdd = new CartProduct(action.product)

                    if (toAdd.quantity !== 0) {
                        state.shoppingcart = [...state.shoppingcart, toAdd]
                    }

                } else {
                    state.shoppingcart[itemIndex].quantity += 1
                }

                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                localStorage.setItem(cartStorageName, jwt.sign(state, secretKey))
            }
            catch(error) { 
                console.error(error)
            }

            return state

        case actiontypes().cart.remove:

            try {
                itemIndex = state.shoppingcart.findIndex(product => product._id === action.id)

                state.shoppingcart[itemIndex].quantity === 1
                    ? state.shoppingcart = state.shoppingcart.filter(item => item._id !== action.id)
                    : state.shoppingcart[itemIndex].quantity -= 1

                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                localStorage.setItem(cartStorageName, jwt.sign(
                    state,
                    secretKey))
            }
            catch { }

            return state

        case actiontypes().cart.clear:
            try {
                state.shoppingcart = []
                state.totalCartAmount = 0
                state.totalCartQuantity = 0

                localStorage.removeItem(cartStorageName)
            }
            catch { }

            return state

        default:
            return state
    }
}

const getTotalQuantity = (items) => {
    let totalQuantity = 0

    items.forEach(product => {
        totalQuantity += product.quantity
    });

    return totalQuantity
}

const getTotalAmount = (items) => {
    let totalAmount = 0

    items.forEach(product => {
        totalAmount += product.price * product.quantity
    });

    return totalAmount
}
