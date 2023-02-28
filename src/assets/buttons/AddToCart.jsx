import { useState } from "react";

function AddToCart({addItemToCart}){
    const [showLoader, setShowLoader] = useState(false);
    console.log(showLoader);
    return (
    <button onClick={()=>{setShowLoader(true);console.log(showLoader);addItemToCart();setShowLoader(false);console.log(showLoader);}} 
    className="btn btn-outline-dark" disabled={showLoader}>
        {
        showLoader ? <>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span className="sr-only">Loading...</span></>
        :
        "Add To Cart"
        }
	</button>
    )
}
export default AddToCart;