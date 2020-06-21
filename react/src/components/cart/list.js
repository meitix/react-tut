import React from 'react';
import {cartStore, removeFromCart } from '../product';

export function Cart({products}) {

  if(!products || !products.length) {
    return <div style={{marginTop: 300, fontSize: 60}} className="text-center">Cart is Empty!</div>
  }


  const removeHandler = (product) => {
    cartStore.dispatch(removeFromCart(product));
  }

    return <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Pic</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => <tr key={index}>
      <th scope="row">{index + 1}</th>
        <td>
          <img width="50" src={product.pic} />
        </td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>
          <button onClick={() => removeHandler(product)} class="btn btn-danger">Remove</button>
        </td>
      </tr>)}
      
    </tbody>
  </table>
}