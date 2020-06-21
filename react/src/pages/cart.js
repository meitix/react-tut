import React, { Component } from "react";
import { Cart } from "../components/cart";
import { productStore } from "../components/product";

export class CartPage extends Component {
  state = { products: [] };

  componentDidMount() {
    this.setState({ products: productStore.getState() })
    productStore.subscribe(() =>
      this.setState({ products: productStore.getState() })
    );
  }
  render() {
    return <Cart products={this.state.products} />;
  }
}
