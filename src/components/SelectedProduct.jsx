import css from "./SelectedProduct.module.css";
import { connect } from "react-redux";
import {addToCart,deleteSingleItem,deleteAllItems} from "../redux/actions/product.actions"

function SelectedProduct({item,addItemToCart,allItems,deleteItem,deleteItems}){
	const currentItem = allItems.find(element => element.product.id === item.id);
    return(
        <div className="container mb-5">
			<h1 className="my-5 h2 p-3 mb-2 bg-dark text-white" style={{"width":"600px"}}>{item.name}</h1>
			<div className="product-info d-flex">
				<div>
					<img  className={css["image-wrapper"]} src={item.image} alt="" />
				</div>
				<div className="container-fluid p-5">
					<p><b>Price: </b>{item.price} {item.currency}</p>
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
							<b>Description:</b>
						</p>
						<p className={css["text-wrap"]}>{item.description}</p>
					</div>
					<button onClick={() => addItemToCart(item)} className="btn btn-outline-dark">Add To Cart</button>
					{currentItem ? <p style={{color:"red"}}>{"You're currently having " + currentItem.quantity + " item(s)"}</p> :
					<p style={{color:"red"}}>{"You haven't purchased any item yet"}</p>}
					<button onClick={() => deleteItem(item)} className="btn btn-outline-dark">Delete Item</button>
					<br></br>
					<br></br>
					<button onClick={()=> deleteItems(item)} className="btn btn-outline-dark">Delete All Items</button>
					<br></br>
					</div>
			</div>
		</div>
    )
}

function dispatchToProps(dispatch){
	return{
		addItemToCart: (product) => dispatch(addToCart(product)),
		deleteItem : (item) => dispatch(deleteSingleItem(item)),
		deleteItems : (items) => dispatch(deleteAllItems(items))
	};
}

function mapPropsToState(store){
	return {
		allItems: store.products.cartProducts
	};
};

export default connect(mapPropsToState,dispatchToProps)(SelectedProduct);
