import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ApiRequest from "../Utils/ApiResquest";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  connectAutoComplete,
  connectSearchBox,
  PoweredBy
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "SX7G9EN1T6",
  "baf9df4d1cce368968385d38fff5af4a"
);

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    padding: "4px",
    display: "flex",
    alignItems: "center",
    width: 500,
    boxShadow: "none",
    borderRadius: "0"
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
    background: "#FFFFFF",
    boxShadow: "0 4px 6px 0 rgba(32,33,36,0.28)",
    borderRadius: "0 0 24px 24px"
  }
  // divider: {
  //   width: 1.2,
  //   height: 34,
  //   margin: 4
  // }
});

// This is the pride colors as a gradient but I like it
// linear-gradient(to right,#DF4998,#39BDB1,#00a9e5,#fed10a)

function Search() {
  const classes = useStyles();
  const [{ ...rest }, setUrl] = ApiRequest();

  function requestToAPI(e, query) {
    e.preventDefault();
    const apiID = "06db74019553953ddc2c5f3847b4c675";
    //checking if the input from user is a US zipcode
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(query);

    if (isValidZip) {
      console.log("Valid US Code");
      setUrl(
        `http://api.openweathermap.org/data/2.5/weather?zip=${query}&APPID=${apiID}`
      );
    } else {
      setUrl(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${apiID}`
      );
    }
  }

  // Single index
  const Autocomplete = ({ hits }) => {
    return (
      <>
        {hits.length > 2 ? (
          <div style={{ display: "none" }} />
        ) : (
          <List className={classes.lists}>
            {hits.map(hit => (
              <ListItem
                button
                onClick={e => requestToAPI(e, hit.Name)}
                key={hit.objectID}
              >
                {hit.Name}
              </ListItem>
            ))}
          </List>
        )}
      </>
    );
  };

  const MaterialUISearchBox = ({ currentRefinement, refine }) => {
    return (
      <>
        <Paper className={classes.root}>
          <InputBase
            onChange={e => refine(e.target.value)}
            value={currentRefinement}
            className={classes.input}
            autoFocus={true}
            placeholder='Search ZIP (US only), City or Place'
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

  const CustomAutocomplete = connectAutoComplete(Autocomplete);
  const ConnectedSearchBox = connectSearchBox(MaterialUISearchBox);

  return (
    <InstantSearch searchClient={searchClient} indexName='city_codes_iso_3166'>
      <ConnectedSearchBox />
      <CustomAutocomplete />
    </InstantSearch>
  );
}

export default Search;
