import axios from 'axios';

export const productService = {
    getProducts: () => {
        return axios.get('http://localhost:5000/products')
    },
    getProductById: id => {
       return axios.get(`http://localhost:5000/products/${id}`)
    }
};
