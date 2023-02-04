import Layout from "../components/Layout";
import Products from "../utils/products.json"
import ProductOfCategory from "../components/ProductOfCategory";
import React from "react";
import { useParams } from 'react-router-dom';



function Category(){
    const {categoryClass} = useParams();
    const keys = Object.keys(Products);
    const data = Products[categoryClass];

    if(keys.includes(categoryClass)){
        return <Layout>
            <h3 className="text-center p-3 mb-2 bg-dark text-white">{categoryClass.toUpperCase()}</h3>
            <br/>
            <div className="container">
                <div className="row">
                    {data.items.map((item) => <ProductOfCategory key={item.id} product={item} category={categoryClass}/>)}
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