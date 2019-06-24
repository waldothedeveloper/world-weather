import React from "react";
import AppBar from "./AppBar/AppBar";
import Hero from "./Hero/Hero";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Test from "./Hero/Test";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Hero />
      {/* <Test /> */}
    </React.Fragment>
  );
}

export default App;
