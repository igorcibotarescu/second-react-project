import { Link } from "react-router-dom";
import css from "./HomeCategory.module.css"

function HomeCategory({categoryName,categoryDescription,categoryImage,categoryClass}){
    return <div className="col-6 mb-4">
        <img className="w-100" src={categoryImage} alt='Category'></img>
        <Link to={'/category/' + categoryClass} className={css['text']}>
            <h3 className='text-center'>{categoryName}</h3>
        </Link>
        <p className="text-center">{categoryDescription}</p>
    </div>
}

export default HomeCategory;