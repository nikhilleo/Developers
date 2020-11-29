import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import SelectUser from "./SelectUser/";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SelectUser} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
