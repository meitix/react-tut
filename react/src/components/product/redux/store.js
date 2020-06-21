import { createStore } from 'redux';
import { cartReducer } from './reducer';

export const cartStore = createStore(cartReducer);