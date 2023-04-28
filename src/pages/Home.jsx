import { useEffect } from "react"
import { getProducts } from "../redux/actions/productAction"
import { useSelector , useDispatch } from "react-redux"


//components 
import Product from "../componets/product"
import  Loading  from "../componets/Loading"
import Error from "../componets/error"



const Home = () => {

    const productDistpatch = useDispatch()
    const { loading , error } = useSelector( state => state.productReducer )

    useEffect( () => {
      getProducts(productDistpatch)
    },[productDistpatch])

    
    return(
        <>
          {error && (<Error />)}
          {loading && (
            <section className="product">
              {
                <>
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                </>
              }
            </section>
          )}
          {!loading && (<Product />)}
          
        </>
    )
}

export default Home