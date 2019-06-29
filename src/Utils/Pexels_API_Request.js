import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = process.env.PEXELS_API_KEY;

const PexelApiRequest = () => {
  const [data, setData] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const abortController = new AbortController();
  const [url, setUrl] = useState(
    "https://api.pexels.com/v1/search?query=bad+weather&per_page=25&page=1"
  );

  //Pexels requires a special auth header
  const config = {
    method: "GET",
    url: url,
    headers: { Authorization: apiKey }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(config);
        setData(result.data);
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
    //eslint-disable-next-line
  }, [url]);

  return [{ data, isError, isLoading }, setUrl];
};

export default PexelApiRequest;
