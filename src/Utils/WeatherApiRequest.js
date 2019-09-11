import { useEffect, useState } from "react";
import axios from "axios";

//Default Cities in this request:
// New York(5128638)
// San Francisco(5391959)
// Los Angeles(5368361)
// Miami(4164138)
// Chicago(4887398)
// Seattle(5809844)
// Boston(4183849)
// Philadelphia(4560349)
// Denver(5419384)

export default function WeatherApiRequest(props) {
  //Setting up some state
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIsError, setWeatherIsError] = useState(false);
  const [weatherIsLoading, setWeatherIsLoading] = useState(false);
  const [weatherUrl, setWeatherUrl] = useState(
    `http://api.openweathermap.org/data/2.5/group?id=5128638,5391959,5368361,4164138,4887398,5809844,4183849,4560349,5419384&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
  );

  // console.log("url on API-REQUEST:", url);

  useEffect(() => {
    // console.error("API request updated or unmounted");
    const abortController = new AbortController();

    const fetchData = async () => {
      setWeatherIsLoading(true);
      try {
        const result = await axios(weatherUrl);
        // console.log("FETCHING ON API REQUEST");
        setWeatherData(result);
      } catch (error) {
        setWeatherIsError(true);
        console.log(`There is a problem with the request ${error}`);
      }
      setWeatherIsLoading(false);
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [weatherUrl]);

  return [{ weatherData, weatherIsError, weatherIsLoading }, setWeatherUrl];
}
