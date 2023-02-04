import Layout from "../components/Layout";
import Products from "../utils/products.json"
import ProductItemCategory from "../components/ProductItemCategory";
import React from "react";
import { useParams } from 'react-router-dom';



function Category(){
    const {categoryClass} = useParams();
    const keys = Object.keys(Products);
    const data = Products[categoryClass];

    if(keys.includes(categoryClass)){
        return <Layout>
            <h3>{"Category: " + categoryClass}</h3>
            <br/>
            <div className="container">
                <div className="row">
                    {data.items.map((item) => <ProductItemCategory key={item.id} product={item} category={categoryClass}/>)}
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