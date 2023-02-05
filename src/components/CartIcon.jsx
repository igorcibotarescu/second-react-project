import { connect } from "react-redux";
import cart from "../assets/icons/shopping-cart.svg";
import { Link } from "react-router-dom";

function CartIcon({numberOfCartItems}){
    return <div>
        <Link to="/cart">
            <img src={cart} alt="Cart"  style={{"padding": "5px"}}></img>
        </Link>
    {numberOfCartItems}
    </div>
}


function mapStateToProps(store){
    const sum = store.products.cartProducts.reduce((accumulator,product) => {
        return accumulator + product.quantity;
    },0);
    return{
        numberOfCartItems:sum
    };
}

export default connect(mapStateToProps)(CartIcon);