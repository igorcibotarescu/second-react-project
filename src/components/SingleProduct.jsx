import css from "./SingleProduct.module.css";

function SingleProduct({item}){
    return(
        <div className="container mb-5">
			<h1 className="my-5 h2">{item.name}</h1>
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
					<button>Adauga in cos</button>
				</div>
			</div>
		</div>
    )
}
export default SingleProduct;
