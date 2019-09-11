import React from "react";
import axios from "axios";

const Unsplash_PexelApi_Request = props => {
  const [unsplashData, setUnsplashData] = React.useState(null);
  const [unsplashPhotos, setUnsplashPhotos] = React.useState(null);
  const [unsplashIsError, setUnsplashIsError] = React.useState(false);
  const [unsplashIsLoading, setUnsplashIsLoading] = React.useState(false);
  const [unsplashUrl, setUnsplashUrl] = React.useState(null);

  React.useEffect(() => {
    //the array coming from the SingleCityCard
    setUnsplashData(props);

    //once we have the city and state set the url for the request
    if (unsplashData !== null) {
      setUnsplashUrl(
        `https://api.unsplash.com/search/photos?client_id=${
          process.env.REACT_APP_UNSPLASH_API_KEY
        }&page=1&query=${unsplashData[0]},${unsplashData[1]}`
      );
    }
  }, [props, unsplashData]);

  //fetching the photos of the city
  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    if (unsplashUrl !== null) {
      const fetchData = async () => {
        setUnsplashIsLoading(true);
        try {
          const response = await axios(unsplashUrl);
          setUnsplashPhotos(response.data.results);
        } catch (error) {
          setUnsplashIsError(true);
          console.log(
            `There is a problem with the Unsplash API request ${error}`
          );
        }
        setUnsplashIsLoading(false);
      };
      fetchData();
    }

    return function cleanup() {
      source.cancel();
    };
    //eslint-disable-next-line
  }, [props, unsplashUrl]);

  return [
    { unsplashPhotos, unsplashIsError, unsplashIsLoading },
    setUnsplashUrl
  ];
};

export default Unsplash_PexelApi_Request;
