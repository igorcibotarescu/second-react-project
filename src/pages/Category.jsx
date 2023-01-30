import Layout from "../components/Layout";
import Products from "../utils/products.json"


function Category(){
    const pathElements = window.location.pathname.split('/');
    const category = pathElements[pathElements.length - 1];
    const keys = Object.keys(Products);
    if(keys.includes(category)){
        const items = Products[category].items;
        return <Layout>
            <h1>{category}</h1>
            {items.map(item =><h3 key={item.id}>{item.name}</h3>)}
        </Layout>
    }else{
        return <Layout>
            <h4>No Products available for this category!</h4>
            </Layout>
    }

}

export default Category;