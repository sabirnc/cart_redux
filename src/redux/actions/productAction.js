import { getProductRequest  } from "../apis/product"
import * as productActionTypes from '../actionTypes/productActionTypes'

export const getProducts =  (dispatch) => {
    dispatch({type:productActionTypes.PRODUCT_REQUEST})
    getProductRequest()
   .then( (res) => res.json())
   .then( (data) => dispatch({type:productActionTypes.PRODUCT_SUCCESS , payload:data}))
   .catch( (err) => dispatch({type:productActionTypes.PRODUCT_FAIL , payload:err}))
}