import React from "react";

export function Product({ data }) {
  return (
    <div className="card mt-5">
      <img src={data.pic} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="text-success" style={{fontSize: 22, fontWeight: 700}}>{data.price}</p>
        <a href="#" className="btn btn-primary">Show More</a>
      </div>
    </div>
  );
}
