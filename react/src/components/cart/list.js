import React from "react";
import { productStore, removeFromCard } from "../product";

export function Cart({ products }) {
  if (!products || !products.length) {
    return <div style={{fontSize:50, marginTop: 300}} className="text-center">Cart is Empty!</div>;
  }

  const removeHandler = (item) => {
      productStore.dispatch(removeFromCard(item))
  }

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={product.pic} width="70" />
            </td>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
            <td>
              <button className="btn btn-danger" onClick={() => removeHandler(product)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
