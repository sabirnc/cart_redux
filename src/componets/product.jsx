import { useSelector } from "react-redux"
import ProductList from "./ProductList"


const Product = () => {
    const { products } = useSelector( state => state.productReducer )
    
    return (
        <section className="product">
           {
            products && products.map( ({id ,title , description , image , price}) => (
                <ProductList 
                 key={id}
                 title={title}
                 description={description}
                 image={image}
                 price={price}
                 id={id}
                />
            ))
           }
        </section>
    )
}

export default Product  