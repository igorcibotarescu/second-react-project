import Layout from "../components/Layout";
import Products from "../utils/products.json";

function Product(){
    const pathElements = window.location.pathname.split('/');
    const productId = parseInt(pathElements[pathElements.length - 1]);
    const category = pathElements[pathElements.length - 2];
    console.log(typeof(productId));
    console.log(typeof(category));
    console.log(category,productId);
    const data = Products[category].items;
    console.log(data);
    const item = data.find(item => item.id = productId);
    console.log(item);
    return <Layout>

    </Layout>
}

export default Product;