import { useEffect, useState } from "react";
import axios from "axios";

export default function WikipediaApiRequest() {
  const [wikiData, setWikiData] = useState(null);
  // console.log("wikiData on Wikipedia API Request: ", wikiData);
  const [wikiIsError, setWikiIsError] = useState(false);
  const [wikiIsLoading, setWikiIsLoading] = useState(false);
  const [wikiUrl, setWikiUrl] = useState(
    `https://en.wikipedia.org/api/rest_v1/page/summary/New%20York?redirect=true`
  );

  // const [wikiArticle, setWikiArticle] = useState(null);
  // console.log("wikiUrl: ", wikiUrl);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setWikiIsLoading(true);

      try {
        const response = await axios(wikiUrl);
        setWikiData(response.data);
      } catch (error) {
        setWikiIsError(true);
        console.error("wiki api error: ", error);
      }
      setWikiIsLoading(false);
    };
    fetchData();

    return function cleanup() {
      abortController.abort();
    };
    //eslint-disable-next-line
  }, [wikiUrl]);

  return [{ wikiData, wikiIsError, wikiIsLoading }, setWikiUrl];
}
