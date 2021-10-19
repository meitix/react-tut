import React, { Component, useEffect, useState } from "react";
import { cartStore } from "../product";

export const CartIcon = () => {

  const [count, setCount] = useState();

  useEffect(() => {
    let unsubscribe = cartStore.subscribe(() =>
    setCount(cartStore.getState().length)
  );

  return unsubscribe;
  }, [])


    return (
      <div>
        <img width="30" src="/images/cart.png" />

        {count > 0 && (
          <span
            style={{ position: "absolute", marginTop: -5, marginLeft: -10 }}
            className="badge badge-danger badge-pill"
          >
            {count}
          </span>
        )}
      </div>
    );
}
