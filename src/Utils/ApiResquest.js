import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiRequest() {
  //openweathermap API

  //Setting up some state
  const [data, setData] = useState(null);
  // console.log("data on API-REQUEST: ", data);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // console.log("isLoading in API REQUEST: ", isLoading);

  //Cities in this request:
  // New York(5128638)
  // San Francisco(5391959)
  // Los Angeles(5368361)
  // Miami(4164138)
  // Chicago(4887398)
  // Seattle(5809844)
  // Boston(4183849)
  // Philadelphia(4560349)
  // Denver(5419384)

  const [url, setUrl] = useState(
    `http://api.openweathermap.org/data/2.5/group?id=5128638,5391959,5368361,4164138,4887398,5809844,4183849,4560349,5419384&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
  );

  // console.log("url on API-REQUEST:", url);

  useEffect(() => {
    // console.error("API request updated or unmounted");
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        // console.log("FETCHING ON API REQUEST");
        setData(result);
      } catch (error) {
        setIsError(true);
        console.log(`There is a problem with the request ${error}`);
      }
      setIsLoading(false);
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return [{ data, isError, isLoading }, setUrl];
}
