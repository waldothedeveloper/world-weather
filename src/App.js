import React from "react";
import Navigation from "./AppBar/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import SectionA from "./layout/SectionA";
import SectionB from "./layout/SectionB";
import SectionC from "./layout/SectionC";
import SectionD from "./layout/SectionD";
import SectionE from "./layout/SectionE";
import "./css/general.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SingleCityCard from "./layout/SingleCityCard";

function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Route exact path='/' component={SectionA} />
        <Route path='/' component={Navigation} />
        <Route path='/weather-card' component={SingleCityCard} />
        <Route exact path='/' component={SectionB} />
        <Route exact path='/' component={SectionC} />
        <Route exact path='/' component={SectionD} />
        <Route exact path='/' component={SectionE} />
      </React.Fragment>
    </Router>
  );
}

export default App;
