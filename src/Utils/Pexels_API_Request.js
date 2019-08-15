import { useEffect, useState } from "react";
import axios from "axios";

const PexelApiRequest = () => {
  const [data, setData] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const abortController = new AbortController();
  const [url, setUrl] = useState("");

  //Pexels requires a special auth header
  const config = {
    method: "GET",
    url: url,
    headers: { Authorization: process.env.REACT_APP_PEXELS_API_KEY }
  };

  useEffect(() => {
    console.log("Pexels-API-Request");

    if (url !== "") {
      console.log("url changed");
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
    }

    return function cleanup() {
      abortController.abort();
    };
    //eslint-disable-next-line
  }, [url]);

  return [{ data, isError, isLoading }, setUrl];
};

export default PexelApiRequest;
