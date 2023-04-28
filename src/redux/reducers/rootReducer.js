import { combineReducers  } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
    authReducer,
    productReducer,
    cartReducer
})

export default rootReducer