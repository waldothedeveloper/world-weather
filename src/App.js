import React from "react";
import AppBar from "./AppBar/AppBar";
import Hero from "./Hero/Hero";
import CssBaseline from "@material-ui/core/CssBaseline";

// hong kong, havana, berlin, Singapore, Moscow
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Hero />
    </React.Fragment>
  );
}

export default App;
