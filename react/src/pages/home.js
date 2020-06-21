import React, { Component } from "react";
import { ProductList } from "../components/product";
import { productService } from "../components/product";

export class HomePage extends Component {
  state = { products: [] };
  
  fetchData() {
    productService
      .getProducts(this.props.location.search)
      .then((response) => this.setState({ products: response.data }));
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  render() {
    return (
      <div className="row">
        <ProductList products={this.state.products} />
      </div>
    );
  }
}
