import React from "react";
import ReactDOM from "react-dom";
import { DataProvider } from "./DataContext";
import App from "./App";
import Main from "./MyForm/Main";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
