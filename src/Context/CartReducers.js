import TYPES from '../Context/CartActions'

const Reducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            if (!state.cart.find(item => item.id === action.payload.id)) {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                cart: [...state.cart]
            }
        case TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter(item => item.id !== action.payload)]
            }
        case TYPES.REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cart: []
            }
        case TYPES.INCREASE_PRODUCT_CART:
            state.cart[state.cart.findIndex(item => item.id === action.payload)].quantity++
            return {
                ...state,
                cart: [...state.cart]
            }
        case TYPES.DECREASE_PRODUCT_CART:
            if (state.cart[state.cart.findIndex(item => item.id === action.payload)].quantity > 1) {
                state.cart[state.cart.findIndex(item => item.id === action.payload)].quantity--
                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart.filter(item => item.id !== action.payload)]
                }
            }
        default:
            return state;

    }
}

export default Reducer;