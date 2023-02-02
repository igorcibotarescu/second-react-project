import css from "../pages/Category.module.css";
import image from "../assets/icons/shopping-cart.svg";
import { Link } from "react-router-dom";

function ProductItemCategory({product,category}){
    return(
        <div className="col-4 mb-4"> 
            <img className={css['category'] + " w-100 object-fit-cover border rounded"} src={product.image} alt="Product"></img>
            <div className="text-center">
                <h4>{product.name}</h4>
                <h6>{"Brand: " + product.brand}</h6>
                <h6>{"Mărimea: " + product.size}</h6>
                <h6>{"Preț: " + product.price + product.currency}</h6>
                <Link to={'/products/' + category + '/' + product.id}>
                    <button type="button" className="btn btn-outline-danger"><img src={image} alt="Shop"></img></button>
                </Link>
            </div>
        </div>
    )
}

export default ProductItemCategory;