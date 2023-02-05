import { connect } from "react-redux";
import cartIcon from "../assets/icons/shopping-cart.svg";

function Cart({numberOfCartItems}){
    return <>
        <img src={cartIcon} alt="Cart"></img>
        <p>{numberOfCartItems}</p>
    </>
}


function mapStateToProps(store){
    return{
        numberOfCartItems:store.products.cartProducts.length
    };
}

export default connect(mapStateToProps)(Cart);