import * as cartActionTypes from "../actionTypes/cartActionTypes";

let intialState;

const userCart =JSON.parse( localStorage.getItem("Cart") )

if(userCart){
  intialState = userCart
}else {
  intialState = {
    cart: [],
    total: 0,
  }
}

function cartReducer(state = intialState, action) {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      // check the item is already available
      const existItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      // if the item is available update the quantity and totalPrice of the item
      if (existItem) {
        return {
          cart: state.cart.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice + action.payload.price,
              };
            }
            return item;
          }),
          total: state.cart.reduce(
            (acc, curr) => acc + curr.totalPrice,
            action.payload.price
          ),
        };
      }

      // if the item is not available add a new item
      return {
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
            totalPrice: action.payload.price,
            image: action.payload.image,
          },
        ],
        total: state.cart.reduce(
          (acc, curr) => acc + curr.totalPrice,
          action.payload.price
        ),
      };
    
    // remove an item from the cart
    case cartActionTypes.REMOVE_CART:
      const item = state.cart.find((item) => item.id === action.payload);
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
        total: Math.abs(state.total - item.totalPrice),
      };
    
    // icrementing cart item quantity  
    case cartActionTypes.INCREMENT_CART:
      return {
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            };
          }
          return item 
        }),
        total: state.total + action.payload.price
      };
    
    // decrementing cart item quantity 
    case cartActionTypes.DECREMENT_CART : 
      const decItem  = state.cart.find( item => item.id === action.payload)
      if(decItem.quantity > 1) {
        return {
          cart:state.cart.map( item => {
             if(item.id === action.payload){
               return {
                 ...item , 
                 quantity:item.quantity - 1,
                 totalPrice:item.totalPrice - item.price
               }
             }
             return item 
          }),
          total:Math.abs(state.total - decItem.price)
        }
      }else if( decItem.quantity === 1 ){
        return {
          cart:state.cart.map( item => {
            if(item.id === action.payload){
              return undefined
            }
            return item
          }).filter( item => item !== undefined ),
          total:Math.abs(state.total - decItem.totalPrice)
        }
      }

    default:return state;
      
  }
}

export default cartReducer;
