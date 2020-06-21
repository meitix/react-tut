import React, { Component } from 'react'
import {ProductList} from '../components/product'
import { productService } from '../components/product';

export class HomePage extends Component {

    state = {products: []};

    componentDidMount() {
        productService.getProducts().then(response => this.setState({products: response.data}))
    }

    render() {
        return (
            <div className="row">
                <ProductList products={this.state.products} />
            </div>
        )
    }
}
