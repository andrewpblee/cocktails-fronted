import React from "react";
import CocktailList from "./CocktailList";
import { HashRouter as Router, Route } from "react-router-dom";
import CocktailPage from "./components/CocktailPage";

const App = () => {
  return (
    <Router>
      <Route path="/" component={CocktailList} exact />
      <Route path="/cocktails/:cocktailParam" render={CocktailPage} />
    </Router>
  );
};

export default App;
