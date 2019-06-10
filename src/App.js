import React, { useState, useEffect } from "react";
import AppBar from "./AppBar/AppBar";
import Hero from "./Hero/Hero";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Clock from "./ExampleCities/Clock";
// import AddDataButton from "./AddData";
// Context for the API
export const Store = React.createContext();
export const Errors = React.createContext();
export const Loading = React.createContext();

// hong kong, havana, berlin, Singapore, Moscow
function App() {
  const [exampleCities, setExampleCities] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const url =
    "http://api.openweathermap.org/data/2.5/group?id=1819729,3553478,2950159,1880252,5601538&units=metric&APPID=06db74019553953ddc2c5f3847b4c675";

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setLoading(true);
      try {
        const result = await axios(url);
        // console.log(result)
        setExampleCities(result.data.list);
      } catch (error) {
        setIsError(true);
        console.log(`There is a problem with the weather request ${error}`);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <React.Fragment>
      <Store.Provider value={exampleCities}>
        <Loading.Provider value={isLoading}>
          <Errors.Provider value={isError}>
            <CssBaseline />
            <AppBar />
            <Hero />
            <Clock />
            {/* <AddDataButton /> */}
          </Errors.Provider>
        </Loading.Provider>
      </Store.Provider>
    </React.Fragment>
  );
}

export default App;
