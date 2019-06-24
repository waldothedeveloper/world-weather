import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ApiRequest from "../Utils/ApiResquest";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Modal from "@material-ui/core/Modal";
import SingleCityCard from "./SingleCityCard";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  connectAutoComplete,
  connectSearchBox,
  PoweredBy
} from "react-instantsearch-dom";
import { Typography } from "@material-ui/core";

//This is the Algolia API keys
const searchClient = algoliasearch(
  "SX7G9EN1T6",
  "baf9df4d1cce368968385d38fff5af4a"
);

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    padding: "4px",
    display: "flex",
    alignItems: "center",
    width: 500,
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
    borderRadius: "0",
    backgroundColor: "#fefefe"
  },
  paper: {
    position: "absolute",
    outline: "none"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  lists: {
    width: "100%",
    maxWidth: 500,
    background: "#fefefe",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
    borderRadius: "0 0 24px 24px"
  },
  listsError: {
    width: "100%",
    maxWidth: 500,
    background: "#fefefe",
    color: "#DC143C",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
    borderRadius: "0 0 24px 24px"
  },
  autoComplete: {
    display: "none"
  }
  // divider: {
  //   width: 1.2,
  //   height: 34,
  //   margin: 4
  // }
}));

// This is the pride colors as a gradient but I like it, doesn't look bad
// linear-gradient(to right,#DF4998,#39BDB1,#00a9e5,#fed10a)

function Search() {
  const classes = useStyles();
  const [{ data, isError, isLoading }, setUrl] = ApiRequest();
  const [openModal, setOpenModal] = React.useState(false);

  //Function to open to Modal
  const handleOpen = () => {
    setOpenModal(true);
  };

  //function to close the Modal
  const handleClose = () => {
    setOpenModal(false);
  };

  function requestWeatherInfo(e, query) {
    console.log("query: ", query);
    //openweatherAPI
    const apiID = "06db74019553953ddc2c5f3847b4c675";
    //  ZIPCODE validation keys =>  https://account.smartystreets.com/#keys
    const apiZIP = "33410461249740701";

    //checking if the input from user is a valid US zipcode
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(query);

    if (isValidZip) {
      // console.log("Valid US Code");
      setUrl(
        `http://api.openweathermap.org/data/2.5/weather?zip=${isValidZip},${query.country.toLowerCase()}&units=metric&APPID=${apiID}`
      );
      handleOpen();
    } else {
      setUrl(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          query.name
        },${query.country.toLowerCase()}&units=metric&APPID=${apiID}`
      );
      handleOpen();
    }
    e.preventDefault();
  }

  // Single index search return from Algolia
  // Some rendering logic is being handled here
  const Autocomplete = ({ currentRefinement, hits }) => {
    return (
      <>
        {currentRefinement === "" ? (
          <div className={classes.autoComplete} />
        ) : !isNaN(currentRefinement) ? (
          <List className={classes.lists}>
            <ListItem>
              <Typography>Is this a US zipcode???</Typography>
            </ListItem>
          </List>
        ) : hits.length === 0 ? (
          <List className={classes.listsError}>
            <ListItem>
              <Typography>Please enter a valid USA city...</Typography>
            </ListItem>
          </List>
        ) : (
          <List className={classes.lists}>
            {hits.map(hit => (
              <ListItem
                button
                onClick={e => requestWeatherInfo(e, hit)}
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
    return (
      <>
        <Paper className={classes.root}>
          <InputBase
            onChange={e => refine(e.target.value)}
            value={currentRefinement}
            className={classes.input}
            autoFocus={true}
            required={true}
            type='text'
            placeholder='Search any City or Place in the USA'
            inputProps={{ maxLength: 5 }}
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
