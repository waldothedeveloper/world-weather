import React, { useEffect } from "react";
import { useStyles } from "../css/searchCSS";
import ApiRequest from "../Utils/ApiResquest";
import { Autocomplete } from "./Autocomplete";
import { MaterialUISearchBox } from "./MaterialUISearchBox";
import Modal from "@material-ui/core/Modal";
import SingleCityCard from "../layout/SingleCityCard";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  connectAutoComplete,
  connectSearchBox
} from "react-instantsearch-dom";

//This is the Algolia API keys
const searchClient = algoliasearch(
  "SX7G9EN1T6",
  process.env.REACT_APP_ALGOLIA_API_KEY
);

// This is the pride colors as a gradient but I like it, doesn't look bad
// linear-gradient(to right,#DF4998,#39BDB1,#00a9e5,#fed10a)

function Search() {
  const classes = useStyles();
  const [{ data, isError, isLoading }, setUrl] = ApiRequest();
  const [openModal, setOpenModal] = React.useState(false);
  const [queryHits, setQueryHits] = React.useState(null);

  useEffect(() => {
    if (queryHits !== null) {
      try {
        setUrl(
          `http://api.openweathermap.org/data/2.5/weather?q=${
            queryHits.name
          },${queryHits.country.toLowerCase()}&units=metric&APPID=${
            process.env.REACT_APP_OPENWEATHERMAP_API_KEY
          }`
        );
        handleOpen();
      } catch (error) {
        console.log(`There is something wrong here: ${error}`);
      }
    }
  }, [queryHits, setUrl]);

  //Function to open to Modal
  const handleOpen = () => {
    setOpenModal(true);
  };

  //function to close the Modal
  const handleClose = () => {
    setOpenModal(false);
  };

  //Connecting MAterial Ui components to the Algolia connectors, then render those
  const CustomAutocomplete = connectAutoComplete(Autocomplete);
  const ConnectedSearchBox = connectSearchBox(MaterialUISearchBox);

  const modalStyles = {
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`
  };
  return (
    <InstantSearch searchClient={searchClient} indexName='us_cities'>
      <ConnectedSearchBox />
      <CustomAutocomplete setQueryHits={setQueryHits} defaultRefinement='' />
      <Modal
        aria-labelledby='single-city-modal-card'
        aria-describedby='single-city-modal-card'
        open={openModal}
        onClose={handleClose}
      >
        <div style={modalStyles} className={classes.paper}>
          <SingleCityCard data={data} isError={isError} isLoading={isLoading} />
        </div>
      </Modal>
    </InstantSearch>
  );
}

export default Search;
