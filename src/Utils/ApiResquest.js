import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiRequest() {
  const apiID = "06db74019553953ddc2c5f3847b4c675";
  const [data, setData] = useState([]);
  console.log("data from ApiRequest: ", data);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    `http://api.openweathermap.org/data/2.5/group?id=1819729,3553478,2950159,1880252,5601538&units=metric&APPID=${apiID}`
  );
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setIsError(false);
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
