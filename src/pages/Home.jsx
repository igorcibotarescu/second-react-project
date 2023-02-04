import HomeCategory from "../components/HomeCategory";
import Layout from "../components/Layout";
import Products from "../utils/products.json";

function Home(){
    const categoryClasses = Object.keys(Products);
    const categories = Object.values(Products);
    return <Layout>
        <div className="container">
            <div className="row">
                {categories.map((category,index) =>(
                    <HomeCategory
                         categoryName={category.name} 
                         categoryDescription={category.description} 
                         categoryImage={category.image} 
                         key={category.id}
                         categoryClass={categoryClasses[index]}
                    />
                ))} 
            </div>
        </div>
    </Layout>
}
export default Home;