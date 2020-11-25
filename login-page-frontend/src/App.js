import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Component/Header";
import Email from "./Email";
import FullName from "./FullName";
import UploadFile from "./UploadFile";
import Result from "./Result";
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
          <Route exact path="/Full__Name" component={FullName} />
          <Route path="/Email" component={Email} />
          <Route path="/UploadFile" component={UploadFile} />
          <Route path="/Result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
