import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from "./home";
import Header from "./header";
import Stories from "./stories";
import Checkout from './checkout';
import Adoptback from "./adoptback";
import Brief from "./brief";
import Signup from "./signup";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/signup">
           <Signup />
        </Route>
        <Route path="/readmore">
          <Header />
           <Brief />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/adopt">
          <Header />
          <Adoptback />
        </Route>
      <Route path="/stories">
          <Header />
          <Stories />
        </Route>
        <Route path="/">
          <Header/>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
