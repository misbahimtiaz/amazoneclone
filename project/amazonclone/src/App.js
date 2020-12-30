import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Login from "./Login.js";
import Product from "./Product.js";
import reducer from "./reducer.js";
function App() {
return (
  <div className="app">
    <Router>
      <Switch>
      <Route path="/login">
  <Login />
</Route>
      <Route path="/">
  <Header/>
  <Home />
</Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;