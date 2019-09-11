import React from "react";
import axios from "axios";

export default function GoogleMapsAPI(props) {
  const [googleData, setGoogleData] = React.useState(null);
  const [cityG, setCityG] = React.useState(null);
  const [gMapsLoading, setgMapsLoading] = React.useState(false);
  const [gMapsError, setgMapsError] = React.useState(false);
  const [gMapsUrl, setgMapsUrl] = React.useState(null);

  React.useEffect(() => {
    //the array coming from the SingleCityCard
    setGoogleData(props);

    //once we have the city and state set the url for the request
    if (googleData !== null) {
      setgMapsUrl(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${googleData[0]
          .split(" ")
          .join("%20")},${googleData[1]}&key=${
          process.env.REACT_APP_GOOGLE_PLACES_API_KEY
        }`
      );
    }
  }, [props, googleData]);

  //fetching the latitude and longitude
  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    if (gMapsUrl !== null) {
      const fetchgMapsData = async () => {
        setgMapsLoading(true);
        try {
          const response = await axios(gMapsUrl);
          setCityG(response.data.results[0].geometry.location);
        } catch (error) {
          setgMapsError(true);
          console.log(
            `Something wrong with the Google Maps API request: ${error}`
          );
        }
        setgMapsLoading(false);
      };

      fetchgMapsData();
    }

    return () => {
      source.cancel();
    };
    //eslint-disable-next-line
  }, [props, gMapsUrl]);

  return [{ cityG, gMapsLoading, gMapsError }];
}
