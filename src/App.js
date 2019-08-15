import React from "react";
import AppBar from "./AppBar/AppBar";
import Hero from "./layout/Hero";
import CssBaseline from "@material-ui/core/CssBaseline";
import WeatherInfo from "./layout/WeatherInfo";
import WeatherPics from "./layout/WeatherPics";
import WeatherCard from "./layout/WeatherCard";
import WeatherWarning from "./layout/WeatherWarning";
import GalleryPreview from "./components/GalleryPreview";
import News from "./components/News";
import SectionA from "./layout/SectionA";
import SectionB from "./layout/SectionB";
import SectionC from "./layout/SectionC";
import SectionD from "./layout/SectionD";
import {
  weatherInfo1,
  weatherInfo2,
  weatherInfo3,
  loremInpsun
} from "./Utils/weatherText";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <SectionA hero={<Hero />} weatherCard={<WeatherCard />} />
      <SectionB
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
    </React.Fragment>
  );
}

export default App;
