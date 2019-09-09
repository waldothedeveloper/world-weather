import React, { useEffect } from "react";
import { useStyles } from "../css/searchCSS";
import ApiRequest from "../Utils/ApiResquest";
import WikipediaApiRequest from "../Utils/WikipediaApiRequest";
import Modal from "@material-ui/core/Modal";
import SingleCityCard from "../layout/SingleCityCard";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import { HOCautoCompleted } from "./CustomAutoComplete";
import GoogleMapsAPI from "../Utils/GoogleMapsAPI";
import Unsplash_PexelApi_Request from "../Utils/Unsplash_PexelApi_Request";

//This is the Algolia API keys ----->>>>>> OLD GITHUB ALGOLIA ACCOUNT <<<<<<<----------------
// const searchClient = algoliasearch(
//   "SX7G9EN1T6",
//   process.env.REACT_APP_ALGOLIA_API_KEY
// );

const searchClient = algoliasearch(
  "8M1E6LB2J3",
  process.env.REACT_APP_ALGOLIA_API_KEY
);

// This is the pride colors as a gradient but I like it, doesn't look bad
// linear-gradient(to right,#DF4998,#39BDB1,#00a9e5,#fed10a)

function Search() {
  const classes = useStyles();
  const [{ data, isError, isLoading }, setUrl] = ApiRequest();
  // console.log("Weather data: ", data);
  const [
    { wikiData, wikiIsError, wikiIsLoading },
    setWikiUrl
  ] = WikipediaApiRequest();
  // console.log("wikiData: ", wikiData);

  const [{ cityInfo, gMapsLoading, gMapsError }, setgMapsUrl] = GoogleMapsAPI();
  // console.log("cityInfo: ", cityInfo);

  const [
    { unsplashData, unsplashIsError, unsplashIsLoading },
    setUnsplashUrl
  ] = Unsplash_PexelApi_Request();

  const [openModal, setOpenModal] = React.useState(false);
  const [queryHits, setQueryHits] = React.useState(null);

  useEffect(() => {
    if (queryHits !== null) {
      //request to Google Maps API
      const googleMapsAPI = () => {
        try {
          // console.warn("GOOGLE MAPS API");
          setgMapsUrl(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${queryHits.city},${queryHits.state}&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`
          );
        } catch (error) {
          console.error(
            `There is something wrong fetching the Google Maps API: ${error}`
          );
        }
      };

      // request to Open Weather Maps API
      const OpenWeatherMapsAPI = () => {
        // console.warn("OPEN-WEATHER-MAP API");
        try {
          setUrl(
            `http://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lng}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
          );
        } catch (error) {
          console.error(
            `There is something wrong fetching the weather: ${error}`
          );
        }
      };

      // request to Open Wikipedia API
      const WikipediaAPI = () => {
        // console.warn("WIKIPEDIA API");
        // let wikiCity = queryHits.city.split(" ");
        // console.log("wikiCity: ", wikiCity);
        try {
          setWikiUrl(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${queryHits.city
              .split(" ")
              .join("%20")},_${queryHits.state}?redirect=true`
          );
          handleOpen();
        } catch (error) {
          console.error(
            `There is something wrong fetching wikipedia api: ${error}`
          );
        }
      };

      // request to the Unsplash API
      const UnsplashAPI = () => {
        try {
          setUnsplashUrl(
            `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=1&query=${queryHits.city},${queryHits.state}`
          );
        } catch (error) {
          console.error(
            `There is something wrong fetching Unsplash api: ${error}`
          );
        }
      };

      const AllInfoReady = () => {
        return Promise.all([
          googleMapsAPI(),
          OpenWeatherMapsAPI(),
          WikipediaAPI(),
          UnsplashAPI()
        ]);
      };
      AllInfoReady();
    }
    //eslint-disable-next-line
  }, [queryHits, cityInfo]);

  //Function to open to Modal
  const handleOpen = () => {
    setOpenModal(true);
  };

  // function to close the Modal
  const handleClose = () => {
    setOpenModal(false);
  };

  const modalStyles = {
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`
  };
  return (
    <InstantSearch searchClient={searchClient} indexName='us_cities'>
      {/* Doing this because the component above doesnt take inline style or any style at all :( */}
      <div className={classes.aisSearch}>
        {/* This is the list of hits coming from Algolia */}
        <HOCautoCompleted
          queryHits={queryHits}
          setQueryHits={setQueryHits}
          defaultRefinement=''
        />

        <Modal
          aria-labelledby='single-city-modal-card'
          aria-describedby='single-city-modal-card'
          open={openModal}
          onClose={handleClose}
        >
          <div style={modalStyles} className={classes.paper}>
            <SingleCityCard
              unsplashIsLoading={unsplashIsLoading}
              unsplashIsError={unsplashIsError}
              unsplashData={unsplashData}
              gMapsError={gMapsError}
              gMapsLoading={gMapsLoading}
              wikiData={wikiData}
              wikiIsLoading={wikiIsLoading}
              wikiIsError={wikiIsError}
              data={data}
              isError={isError}
              isLoading={isLoading}
            />
          </div>
        </Modal>
      </div>
    </InstantSearch>
  );
}

export default Search;
