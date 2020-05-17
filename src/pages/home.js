import React, { Component } from 'react'
import {ProductList} from '../components/product'
import { productService } from '../components/product';

export class HomePage extends Component {

    state = {products: productService.getProducts()};

    render() {
        return (
            <div className="row">
                <ProductList products={this.state.products} />
            </div>
        )
    }
}
