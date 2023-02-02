import Layout from "../components/Layout";
import Products from "../utils/products.json"
import ProductItemCategory from "../components/ProductItemCategory";

function Category(){
    const pathElements = window.location.pathname.split('/');
    const category = pathElements[pathElements.length - 1];
    const keys = Object.keys(Products);

    if(keys.includes(category)){
        const data = Products[category];
        return <Layout>
            <h3>{"Category: " + category}</h3>
            <br/>
            <div className="container">
                <div className="row">
                    {data.items.map((item) => <ProductItemCategory key={item.id} product={item} category={category}/>)}
                </div>
            </div>
        </Layout>
    }else{
        return <Layout>
            <h4>No Products available for this category!</h4>
            </Layout>
    }

}

export default Category;