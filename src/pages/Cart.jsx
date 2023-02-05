import Layout from "../components/Layout";
import { connect } from "react-redux";
import TotalItems from "../components/TotalItems";

function Cart({products}){
    if(products.length >= 1){
        return <Layout>
            <TotalItems products={products}/>
        </Layout>
    }else{
        return <Layout/>
    }
};

function mapPropsToState(store){
    return{
        products: store.products.cartProducts
    };
};

export default connect(mapPropsToState)(Cart);