import { createStore } from 'redux';
import { cartReducer } from "./reducers";



export const cartStore = createStore(cartReducer)