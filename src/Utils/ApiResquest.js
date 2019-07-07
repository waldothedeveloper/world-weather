import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiRequest() {
  //openweathermap API

  //Setting up some state
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Cities in this request:
  // New York(5128638)  coords: 40.714645, -74.041440
  // San Francisco(5391959)  coords:
  // Los Angeles(5368361)  coords:
  // Miami(4164138)  coords:
  // Chicago(4887398)  coords:
  // Seattle(5809844)  coords:
  // Boston(4183849)  coords:
  // Philadelphia(4560349)  coords:
  // Denver(5419384)  coords:

  const [url, setUrl] = useState(
    `http://api.openweathermap.org/data/2.5/group?id=5128638,5391959,5368361,4164138,4887398,5809844,4183849,4560349,5419384&units=metric&APPID=${
      process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    }`
  );
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url, { signal: signal });
        setData(result);
      } catch (error) {
        setIsError(true);
        console.log(`There is a problem with the request ${error}`);
      }
      setIsLoading(false);
    };

    fetchData();

    return function cleanup() {
      abortController.abort();
    };
  }, [url]);

  return [{ data, isError, isLoading }, setUrl];
}
