import * as productActionTypes from '../actionTypes/productActionTypes'


const intialState = {
    products:null,
    loading:null,
    error:null
}


function productReducer(state = intialState , action) {   
    switch(action.type) {
        case productActionTypes.PRODUCT_REQUEST :
            return {
                ...state,
                loading:true,
                error:null
            }
        case productActionTypes.PRODUCT_SUCCESS :
            return {
                ...state,
                loading:false,
                products:action.payload,
                error:null
            }
        case productActionTypes.PRODUCT_FAIL :
            return {
                ...state ,
                products:false,
                error:action.payload
            }
        default : return state
    }
}

export default productReducer