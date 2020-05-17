import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/navbar";
import { HomePage, Detail } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
