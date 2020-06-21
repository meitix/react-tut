import { createStore } from 'redux';
import { productReducer } from "./reducers";



export const productStore = createStore(productReducer)