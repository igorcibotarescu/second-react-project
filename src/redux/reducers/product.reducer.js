import {ProductActions} from "../actions/product.actions"

const initialState = {
    cartProducts: []
}

function reducer(state = initialState,action){
    switch(action.type){
        case ProductActions.ADD_TO_CART:
            return{
                ...state,
                cartProducts: [...state.cartProducts, action.payload]
            };
        default:
            return state;
    }
}

export default reducer;