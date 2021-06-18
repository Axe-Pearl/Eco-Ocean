import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from "./home";
import Header from "./header";
import Stories from "./stories";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
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
