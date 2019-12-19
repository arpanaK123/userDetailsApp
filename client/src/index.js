import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./containers/CreateUser";
import SearchUser from "./containers/SearchUser";
const AppRoutes = () => (
  <Router>
    <Route exact path="/" component={CreateUser} />
    <Route path="/search-user" component={SearchUser} />
  </Router>
);
ReactDOM.render(<AppRoutes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
