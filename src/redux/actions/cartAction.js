import * as cartActionTypes from '../actionTypes/cartActionTypes'



export const addToCart = (id , name , price , image) => ({
    type:cartActionTypes.ADD_TO_CART,
    payload:{
        id , name, price , image
    }
})

export const removeCartItem = (id) => ({
    type:cartActionTypes.REMOVE_CART,
    payload:id
})


export const incremnetCartQuantity = (id , price ) => ({
    type:cartActionTypes.INCREMENT_CART,
    payload:{
        id , 
        price
    }
})

export const decrementCartQuantity = (id) => ({
    type:cartActionTypes.DECREMENT_CART,
    payload:id
})