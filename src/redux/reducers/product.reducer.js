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
        case ProductActions.RESET_CART:
            return{
                ...state,
                cartProducts: []
            }
        case ProductActions.DELETE_SINGLE_ITEM:
            const previousItem = state.cartProducts.find((p) => p.product.id === action.payload.id);
            const remainingItems = state.cartProducts.filter((p) => p.product.id !== action.payload.id);
            if(previousItem){
                let newItems = undefined;
                if(previousItem.quantity >= 1){
                    newItems =  {...previousItem,quantity: previousItem.quantity - 1};
                }else{
                    newItems =  {...previousItem,quantity: 0};
                }
                return{
                    ...state,
                    cartProducts: [...remainingItems,newItems]
                }
            }else{
                return{
                    ...state,
                    cartProducts: [...state.cartProducts]
                }
            }
        case ProductActions.DELETE_ALL_ITEMS:
            const itemToSearch = state.cartProducts.find((p) => p.product.id === action.payload.id);
            const itemsToInclude = state.cartProducts.filter((p) => p.product.id !== action.payload.id);
            const newItemToInclude = {...itemToSearch,quantity:0};
            return {
                ...state,
                cartProducts: [...itemsToInclude,newItemToInclude]
            }
        default:
            return state;
    }
}

export default reducer;