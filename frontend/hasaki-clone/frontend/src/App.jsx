import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/ClientPage/LandingPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
};

export default App;