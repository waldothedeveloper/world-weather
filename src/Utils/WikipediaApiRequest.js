import React from "react";
import axios from "axios";

export default function WikipediaApiRequest(props) {
  const [wikiData, setWikiData] = React.useState(null);
  const [wikiArticle, setWikiArticle] = React.useState(null);
  const [wikiIsLoading, setWikiIsLoading] = React.useState(false);
  const [wikiIsError, setWikiIsError] = React.useState(false);
  const [wikiUrl, setWikiUrl] = React.useState(null);

  React.useEffect(() => {
    setWikiData(props);

    //once we have the city and state set the url for the request
    if (wikiData !== null) {
      setWikiUrl(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiData[0]
          .split(" ")
          .join("%20")},_${wikiData[1]}?redirect=true`
      );
    }
  }, [props, wikiData]);

  //fetching the wikipedia city info (extract)
  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    if (wikiUrl !== null) {
      const fetchWikiData = async () => {
        setWikiIsLoading(true);
        try {
          const response = await axios(wikiUrl);
          setWikiArticle(response.data);
        } catch (error) {
          setWikiIsError(true);
          console.error(`Something wrong with the Wiki API: ${error}`);
        }
        setWikiIsLoading(false);
      };
      fetchWikiData();
    }

    return () => {
      source.cancel();
    };
  }, [props, wikiUrl]);

  return [{ wikiArticle, wikiIsError, wikiIsLoading }, setWikiUrl];
}
