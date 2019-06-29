import React from "react";
import AppBar from "./AppBar/AppBar";
import Hero from "./layout/Hero";
import SectionB from "./layout/SectionB";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Hero />
      <SectionB />
    </React.Fragment>
  );
}

export default App;
