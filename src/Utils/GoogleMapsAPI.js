import React from "react";
import axios from "axios";

export default function GoogleMapsAPI() {
  const [cityInfo, setCityInfo] = React.useState(null);
  // console.log("cityInfo on GOOGLE-MAPS-API: ", cityInfo);
  const [gMapsLoading, setgMapsLoading] = React.useState(false);
  const [gMapsError, setgMapsError] = React.useState(false);
  const [gMapsUrl, setgMapsUrl] = React.useState(
    `https://maps.googleapis.com/maps/api/geocode/json?address=Miami,Florida&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`
  );

  const abortController = new AbortController();

  React.useEffect(() => {
    const fetchgMapsData = async () => {
      setgMapsLoading(true);

      try {
        const response = await axios(gMapsUrl);
        setCityInfo(response.data.results[0].geometry.location);
      } catch (error) {
        setgMapsError(true);
        console.log(
          `Something wrong with the Google Maps API request: `,
          error
        );
      }
      setgMapsLoading(false);
    };

    fetchgMapsData();

    return () => {
      abortController.abort();
    };
    //eslint-disable-next-line
  }, [gMapsUrl]);

  return [{ cityInfo, gMapsLoading, gMapsError }, setgMapsUrl];
}
