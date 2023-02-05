import css from "./SelectedProduct.module.css";
import { connect } from "react-redux";
import {addToCart} from "../redux/actions/product.actions"

function SelectedProduct({item,addItemToCart}){
    return(
        <div className="container mb-5">
			<h1 className="my-5 h2 p-3 mb-2 bg-dark text-white" style={{"width":"600px"}}>{item.name}</h1>
			<div className="product-info d-flex">
				<div>
					<img  className={css["image-wrapper"]} src={item.image} alt="" />
				</div>
				<div className="container-fluid p-5">
					<p><b>{item.price} {item.currency}</b></p>
					<div>
					    <div>
							<p>
			                    <b>Color</b>: {item.colour}
							</p>
						</div>
						<div>
							<p>
								<b>Material</b>: {item.material}
							</p>
						</div>
						<div>
							<p>
								<b>Brand</b>: {item.brand}
							</p>
						</div>
						<p className="font-weight-bold mb-1">
							<b>Descriere:</b>
						</p>
						<p className={css["text-wrap"]}>{item.description}</p>
					</div>
					<button onClick={() => addItemToCart(item)} className="btn btn-outline-dark">Add to Cart</button>
				</div>
			</div>
		</div>
    )
}

function dispatchToProps(dispatch){
	return{
		addItemToCart: (product) => dispatch(addToCart(product))
	};
}

export default connect(null,dispatchToProps)(SelectedProduct);
