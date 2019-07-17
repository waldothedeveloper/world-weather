import React from "react";
import AppBar from "./AppBar/AppBar";
import Hero from "./layout/Hero";
import SectionB from "./layout/SectionB";
import CssBaseline from "@material-ui/core/CssBaseline";
import WeatherInfo from "./layout/WeatherInfo";
import WeatherPics from "./layout/WeatherPics";
// import Map from "./components/Map";
import News from "./components/News";
import SectionC from "./layout/SectionC";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Hero />
      <SectionB partA={<WeatherInfo />} partB={<WeatherPics />} />
      <SectionC news={<News />} />
    </React.Fragment>
  );
}

export default App;
