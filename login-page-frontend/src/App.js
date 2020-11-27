import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Form from "./MyForm/";
import SelectUser from "./SelectUser/";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/login__main" component={SelectUser} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
