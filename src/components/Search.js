import React, { useEffect, useState, useRef } from "react";
import { useStyles } from "../css/searchCSS";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ApiRequest from "../Utils/ApiResquest";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Modal from "@material-ui/core/Modal";
import SingleCityCard from "../layout/SingleCityCard";
import algoliasearch from "algoliasearch";
import axios from "axios";
import {
  InstantSearch,
  connectAutoComplete,
  connectSearchBox,
  PoweredBy
} from "react-instantsearch-dom";
import CustomClearResults from "./CustomClearResults";

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
  const [query, setQuery] = useState(null);
  const [currentVal, setCurrentVal] = useState("");
  console.log("currentVal: ", currentVal);
  const [openModal, setOpenModal] = React.useState(false);
  const [zipLoading, setZipLoading] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [zipData, setZipData] = useState([]);
  console.log("zipData: ", zipData);

  const zipvalidate = `https://us-zipcode.api.smartystreets.com/lookup?auth-id=${
    process.env.REACT_APP_SMARTYSTREETS_API_KEY
  }&auth-token=${
    process.env.REACT_APP_SMARTYSTREETS_AUTH_TOKEN
  }&zipcode=${query}`;

  //checking if the input from user have the format of a USA zipcode like 5 or 5-4 digits
  const isValidUSZipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(query);

  useEffect(() => {
    if (isValidUSZipCode) {
      console.log("Valid zipcode format go get where is it in USA");
      //fetch the valid zipcode location
      const fetchZipData = async () => {
        setZipLoading(true);
        try {
          const result = await axios(zipvalidate);
          setZipData(result);
        } catch (error) {
          setZipError(true);
          console.log(`There was a problem with the request ${error}`);
        }
        setZipLoading(false);
      };

      fetchZipData();

      // IF there's no errors from the zipcode validation api then
      // go and call the weathermap API to get actual weather

      // if (!zipError && !zipLoading) {
      //   setUrl(
      //     `http://api.openweathermap.org/data/2.5/weather?zip=${
      //       query
      //     },${query.country.toLowerCase()}&units=metric&APPID=${
      //       process.env.REACT_APP_OPENWEATHERMAP_API_KEY
      //     }`
      //   );
      //   handleOpen();
      // }
    } else {
      console.log("Probably not a number...");
      //   setUrl(
      //     `http://api.openweathermap.org/data/2.5/weather?q=${
      //       query.name
      //     },${query[1].country.toLowerCase()}&units=metric&APPID=${
      //       process.env.REACT_APP_OPENWEATHERMAP_API_KEY
      //     }`
      //   );
      //   handleOpen();
    }
  });

  //Function to open to Modal
  const handleOpen = () => {
    setOpenModal(true);
  };

  //function to close the Modal
  const handleClose = () => {
    setOpenModal(false);
  };

  // Single index search return from Algolia
  // Some rendering logic is being handled here
  const Autocomplete = ({ currentRefinement, hits }) => {
    console.log("hits: ", hits);

    return (
      <>
        {currentRefinement === "" ? (
          <div className={classes.autoComplete} />
        ) : (
          <List className={classes.lists}>
            {hits.map(hit => (
              <ListItem
                button
                onClick={e => setQuery([e, hit])}
                key={hit.objectID}
              >
                {hit.name}
              </ListItem>
            ))}
          </List>
        )}
      </>
    );
  };

  //Search component Material UI based
  const MaterialUISearchBox = ({ currentRefinement, refine }) => {
    console.log("currentRefinement: ", currentRefinement);
    return (
      <>
        <Paper className={classes.root}>
          <InputBase
            onChange={e => {
              refine(e.target.value);
              // setCurrentVal(currentRefinement);
            }}
            value={currentRefinement}
            className={classes.input}
            autoFocus={true}
            required={true}
            type='text'
            placeholder='Search any City or ZipCode in the USA'
            // This property below is to limit the length of the input when is a zipcode
            // inputProps={{ maxLength: 5 }}
          />
          <PoweredBy />
          {/* <Divider className={classes.divider} /> */}
          <IconButton
            color='primary'
            className={classes.iconButton}
            aria-label='Directions'
          >
            <SearchIcon />
          </IconButton>
          <CustomClearResults clearsQuery />
        </Paper>
      </>
    );
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
      <CustomAutocomplete defaultRefinement='' />
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
