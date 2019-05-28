import React from "react";
import AppBar from "./AppBar/AppBar";
import Hero from "./Hero/Hero";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div>
      <CssBaseline />
      <AppBar />
      <Hero />
    </div>
  );
}

export default App;
