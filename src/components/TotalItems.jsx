function TotalItems({products}){
    return <>
    <div className="container">
        <div className="row">
            <div className="col-6">
                Product
            </div>
            <div className="col-2">
                Prrice
            </div>
            <div className="col-2">
                Quantity
            </div>
            <div className="col-2">
                Total Price
            </div>
        </div>
    </div>
    {products.map(p => <div className="row">
            <div className="col-6">
                {p.product.name}
            </div>
            <div className="col-2">
                {p.product.price + " " + p.product.currency}
            </div>
            <div className="col-2">
                {p.quantity + " items"}
            </div>
            <div className="col-2">
                {p.quantity * p.product.price + " " + p.product.currency}
            </div>
        </div>
    )}
    </>
}
export default TotalItems;