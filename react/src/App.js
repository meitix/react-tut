import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/navbar";
import { HomePage, DetailPage, CartPage } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/detail/:id" component={DetailPage} />
            <Route path="/cart" children={<CartPage />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
