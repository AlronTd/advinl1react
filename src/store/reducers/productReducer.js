import actiontypes from '../actiontypes'

const initState = {}

export default (state = initState, action) => {
    switch(action.type) {
        case actiontypes().product.set:
            return action.payload

        default:
            return state
    }
}