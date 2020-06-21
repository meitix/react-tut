import React, { Component } from "react";
import { productStore } from "../product";
import { Link } from "react-router-dom";

export class CartIcon extends Component {
  state = {};
  componentDidMount() {
    productStore.subscribe(() =>
      this.setState({ count: productStore.getState().length })
    );
  }
  render() {
    return (
        <Link to="/cart">
      <div style={{ cursor: "pointer" }}>
        <img src="/images/cart.png" width="30" />
        {this.state.count > 0 && (
          <span
            style={{ marginLeft: -10, marginTop: -5, position: "absolute" }}
            class="badge badge-pill badge-danger"
          >
            {this.state.count}
          </span>
        )}
      </div>
      </Link>
    );
  }
}
