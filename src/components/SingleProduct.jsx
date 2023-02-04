import css from "./SingleProduct.module.css";

function SingleProduct({item}){
    return(
        <div className="d-flex justify-content-center">
            <img className={css['single-product-style'] + " object-fit-cover border rounded"} src={item.image} alt="Product"></img>
            <div className="text-center">
                <h4>{item.name}</h4>
                <h6>{"Brand: " + item.brand}</h6>
                <h6>{"Mărimea: " + item.size}</h6>
                <h6>{"Preț: " + item.price + item.currency}</h6>
            </div>
        </div>
    )
}

export default SingleProduct;