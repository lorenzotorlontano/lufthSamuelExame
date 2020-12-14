import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import "./router.css";
import FlightsList from "../pages/flightsList";
import FlightDetails from "../pages/flightDetails";
function RouterView() {
  return (
    <div className="wrapperRouteView">
      <Router>
        <Switch>
          <Route
            exact
            path="/flightList/:valueDa/:valueA/:dataTime/:toDataTime"
          >
            <FlightsList />
          </Route>
          <Route exact path="/flightList/:valueDa/:valueA/:dataTime/">
            <FlightsList />
          </Route>
          <Route exact path="/flightDetails/:id">
            <FlightDetails />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouterView;
