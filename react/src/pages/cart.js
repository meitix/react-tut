import React, { Component } from "react";
import { Cart } from "../components/cart";
import { cartStore } from "../components/product";

export class CartPage extends Component {
  state = { products: [] };

  componentDidMount() {
    this.setState({ products: cartStore.getState() })
    cartStore.subscribe(() =>
      this.setState({ products: cartStore.getState() })
    );
  }
  render() {
    return <Cart products={this.state.products} />;
  }
}
