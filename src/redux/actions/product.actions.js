export class ProductActions{
    static ADD_TO_CART = "[Products] Add to Cart";
    static RESET_CART = "[Products] Reset Cart";
    static DELETE_SINGLE_ITEM = "[Products] Delete Single Item";
    static DELETE_ALL_ITEMS = "[Products] Delete All Item";
}

export function addToCart(product){
    return{
        type: ProductActions.ADD_TO_CART,
        payload: product
    }
}

export function resetCart(){
    return{
        type:ProductActions.RESET_CART
    }
}

export function deleteSingleItem(itemToDelete){
    return{
        type: ProductActions.DELETE_SINGLE_ITEM,
        payload : itemToDelete
    }
}

export function deleteAllItems(itemsToDelete){
    return{
        type: ProductActions.DELETE_ALL_ITEMS,
        payload : itemsToDelete
    }
}