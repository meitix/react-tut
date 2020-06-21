import React, { Component } from "react";
import { CartIcon } from "../cart";
import { Link } from 'react-router-dom';
import {Search } from './search';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link to="/" >
        <span className="navbar-brand">
          Shopping
        </span>
       </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"> </ul>
          <Link to="/cart">
            <div style={{ marginRight: 30 }}>
              <CartIcon />
            </div>
          </Link>
          <Search />
         </div>
      </nav>
    );
  }
}
