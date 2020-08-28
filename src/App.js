import React from "react";
import "./App.css";
import { BrowserRouter as Router, /* Switch, */ Route/* , Link  */} from "react-router-dom";

import Home from "./Componentes/Home/Home";
import Results from "./Componentes/Results/Results";
import MovieDetails from "./Componentes/MovieDetails/MovieDetails";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/results" component={Results} />
      <Route path="/movie/:id" component={MovieDetails} />
    </Router>
  );
}

export default App;
