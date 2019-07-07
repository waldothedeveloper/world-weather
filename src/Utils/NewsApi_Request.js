import { useState, useEffect } from "react";
import axios from "axios";

function NewsApi_Request() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/everything?q=climate&domains=nytimes.com&apiKey=${
      process.env.REACT_APP_NEWS_API
    }`
  );

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios(url);
        const filteredData = response.data.articles.filter(a => {
          return a.urlToImage !== null;
        });
        setData(filteredData);
      } catch (error) {
        setIsError(true);
        console.log(`There is a problem with the news API request ${error}`);
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

export default NewsApi_Request;
