import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Main from "./MyForm/Main";
import Login from "./MyForm/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login__main" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
