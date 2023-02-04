import Layout from "../components/Layout";
import Products from "../utils/products.json";
import { useParams } from 'react-router-dom';
import SingleProduct from "../components/SingleProduct";

function Product(){
    const {category,productId} = useParams();
    const data = Products[category].items;
    const item = data.find(item => item.id === +productId);
    return <Layout>
        <SingleProduct item={item}/>
    </Layout>
}

export default Product;