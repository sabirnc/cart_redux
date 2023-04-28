import * as authActionTypes from "../actionTypes/authActionTypes"


const intialState = {
    isAuthenticated:false
}

function authReducer (state = intialState , action) {
   switch(action.type) {
      case authActionTypes.LOGIN : 
        return { isAuthenticated : true }
      case authActionTypes.LOGOUT :
        return { isAuthenticated : false }
      default : return state
   }
}

export default authReducer