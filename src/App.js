import React from "react";
import Navigation from "./AppBar/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
// import WeatherInfo from "./layout/WeatherInfo";
// import WeatherPics from "./layout/WeatherPics";
// import WeatherWarning from "./layout/WeatherWarning";
// import GalleryPreview from "./components/GalleryPreview";
// import BottomNav from "./components/BottomNav";
// import LastBottomNav from "./layout/LastBottomNav";
// import News from "./components/News";
import SectionA from "./layout/SectionA";
// import SectionB from "./layout/SectionB";
// import SectionC from "./layout/SectionC";
// import SectionD from "./layout/SectionD";
// import SectionE from "./layout/SectionE";
// import {
//   weatherInfo1,
//   weatherInfo2,
//   weatherInfo3,
//   loremInpsun
// } from "./Utils/weatherText";

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

        {/* <SectionB
        partA={
          <WeatherInfo
            weatherInfo1={weatherInfo1}
            weatherInfo2={weatherInfo2}
            loremInpsun={loremInpsun}
          />
        }
        partB={<WeatherPics />}
      />
      <SectionC news={<News />} />
      <SectionD
        galleryPreview={<GalleryPreview />}
        partC={
          <WeatherInfo weatherInfo1={weatherInfo3} loremInpsun={loremInpsun} />
        }
        partD={<WeatherWarning />}
      />
      <SectionE bottomNav={<BottomNav />} lastBottomNav={<LastBottomNav />} /> */}
      </React.Fragment>
    </Router>
  );
}

export default App;
