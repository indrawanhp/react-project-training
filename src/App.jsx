import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

import "./App.css";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Details from "./Pages/Details.jsx";
import Landing from "./Pages/Landing.jsx";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar />
        <div className="main-container"> */}
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/details/:id" exact component={Details} />
        </Switch>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
