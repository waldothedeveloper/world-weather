import React from "react";
import axios from "axios";

const Unsplash_Custom_Hook = () => {
  const [unsplashPhotos, setUnsplashPhotos] = React.useState(null);
  const [unsplashIsError, setUnsplashIsError] = React.useState(false);
  const [unsplashIsLoading, setUnsplashIsLoading] = React.useState(false);
  const [unsplashUrl, setUnsplashUrl] = React.useState(null);

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      if (unsplashUrl !== null) {
        setUnsplashIsLoading(true);
        try {
          const response = await axios(unsplashUrl);
          setUnsplashPhotos(response.data.results);
        } catch (error) {
          setUnsplashIsError(true);
          console.log(
            `There is a problem with the Unsplash API request: ${error}`
          );
        }
        setUnsplashIsLoading(false);
      }
    };
    fetchData();

    return function cleanup() {
      source.cancel();
    };
  }, [unsplashUrl]);

  return [
    { unsplashPhotos, unsplashIsError, unsplashIsLoading },
    setUnsplashUrl
  ];
};

export default Unsplash_Custom_Hook;
