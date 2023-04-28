import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)


store.subscribe( () => {
   localStorage.setItem("Cart" , JSON.stringify( store.getState().cartReducer))
})



export default store