import {ProductActions} from "../actions/product.actions"

const initialState = {
    cartProducts: []
}

function reducer(state = initialState,action){
    switch(action.type){
        case ProductActions.ADD_TO_CART:
            const existingProduct = state.cartProducts.find((p) => p.product.id === action.payload.id);
            if(existingProduct){
                const remainingProducts = state.cartProducts.filter((p) => p.product.id !== action.payload.id);
                const updateInsertedProduct =  {...existingProduct,quantity: existingProduct.quantity + 1};
            return{
                ...state,
                cartProducts: [...remainingProducts, updateInsertedProduct]
            };
        }else{
            const firstTimeProduct = {
                product:action.payload,
                quantity:1
            };
            return{
                ...state,
                cartProducts:[...state.cartProducts,firstTimeProduct]
            }
        }
        default:
            return state;
    }
}

export default reducer;