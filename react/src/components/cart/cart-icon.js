import React, { Component } from "react";
import { cartStore } from "../product";

export class CartIcon extends Component {
  state = {};

  componentDidMount() {
    this.unsubscribe = cartStore.subscribe(() =>
      this.setState({ count: cartStore.getState().length })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <img width="30" src="/images/cart.png" />

        {this.state.count > 0 && (
          <span
            style={{ position: "absolute", marginTop: -5, marginLeft: -10 }}
            className="badge badge-danger badge-pill"
          >
            {this.state.count}
          </span>
        )}
      </div>
    );
  }
}
