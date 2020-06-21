import React from "react";
import { Product } from './product';

export function ProductList(props) {
  return props.products.map((item, index) => (
    <div className="col-4" key={index}>
      <Product data={item} />
    </div>
  ));
}
