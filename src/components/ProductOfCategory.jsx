import image from "../assets/icons/shopping-cart.svg";
import { Link } from "react-router-dom";

function ProductOfCategory({product,category}){
    return(
        <div className="col-6 col-lg-3 mb-4"> 
            <img className=" w-100 object-fit-cover border rounded" style={{"height":"350px"}} src={product.image} alt="Product"></img>
            <div className="text-center">
                <h6 style={{color:"#73A0A0"}}>{product.name}</h6>
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

export default ProductOfCategory;