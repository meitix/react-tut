import React from "react";
import { useParams } from "react-router-dom";
import {productService } from '../components/product';

export function Detail() {

  const {id} = useParams();

  const data = productService.getProductById(id);

  return (
    <div className="row">
      <div className="col-5">
        <img src={data.pic} width="100%" />
      </div>
      <div className="col-7">
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <strong style={styles.price}>{data.price}</strong>
      </div>
    </div>
  );
}

const styles = {
  price: {
    color: "green",
    fontSize: 24,
  },
};
