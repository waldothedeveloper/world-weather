import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiRequest() {
  const apiID = "06db74019553953ddc2c5f3847b4c675";
  const [data, setData] = useState([]);
  // console.log("data from ApiRequest: ", data);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //Cities in this request: New York(5128638), San Francisco(5391959), Los Angeles(5368361), District of Columbia(4138106), Miami(4164138), Chicago(4887398), Seattle(5809844), Boston(4183849), Philadelphia(4560349), Denver(5419384)
  const [url, setUrl] = useState(
    `http://api.openweathermap.org/data/2.5/group?id=5128638,5391959,5368361,4138106,4164138,4887398,5809844,4183849,4560349,5419384&units=metric&APPID=${apiID}`
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
