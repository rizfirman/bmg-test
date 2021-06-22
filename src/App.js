import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NetflixClone from "./pages/NetflixClone";
import MultiStepForm from "./pages/MultiStepForm";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <MultiStepForm />
      </Route>
      <Switch>
        <Route path="/home">
          <NetflixClone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
