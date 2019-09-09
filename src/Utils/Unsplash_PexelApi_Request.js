import { useEffect, useState } from "react";
import axios from "axios";

const Unsplash_PexelApi_Request = () => {
  const [unsplashData, setUnsplashData] = useState(null);
  const [unsplashIsError, setUnsplashIsError] = useState(false);
  const [unsplashIsLoading, setUnsplashIsLoading] = useState(false);
  const [unsplashUrl, setUnsplashUrl] = useState("");
  const abortController = new AbortController();

  useEffect(() => {
    if (unsplashUrl !== "") {
      const fetchData = async () => {
        setUnsplashIsLoading(true);
        try {
          const result = await axios(unsplashUrl);
          setUnsplashData(result.data.results);
        } catch (error) {
          setUnsplashIsError(true);
          console.log(`There is a problem with the request ${error}`);
        }
        setUnsplashIsLoading(false);
      };
      fetchData();
    }

    return function cleanup() {
      abortController.abort();
    };
    //eslint-disable-next-line
  }, [unsplashUrl]);

  return [{ unsplashData, unsplashIsError, unsplashIsLoading }, setUnsplashUrl];
};

export default Unsplash_PexelApi_Request;
