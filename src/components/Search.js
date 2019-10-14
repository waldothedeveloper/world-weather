import React from "react";
import { useStyles } from "../css/searchCSS";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import { HOCautoCompleted } from "./CustomAutoComplete";

//This is the Algolia API keys ----->>>>>> OLD GITHUB ALGOLIA ACCOUNT <<<<<<<----------------
// const searchClient = algoliasearch(
//   "SX7G9EN1T6",
//   process.env.REACT_APP_ALGOLIA_API_KEY
// );

//!TODO: this new Algolia account has 14 days left or so...
const searchClient = algoliasearch(
  "8M1E6LB2J3",
  process.env.REACT_APP_ALGOLIA_API_KEY
);

// This is the pride colors as a gradient but I like it, doesn't look bad
// linear-gradient(to right,#DF4998,#39BDB1,#00a9e5,#fed10a)

function Search({ setMediumDevicesHeightElem }) {
  const classes = useStyles();

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName='us_cities'>
        <div className={classes.aisSearch}>
          {/* This is the list of hits coming from Algolia */}
          <HOCautoCompleted
            setMediumDevicesHeightElem={setMediumDevicesHeightElem}
            defaultRefinement=''
          />
        </div>
      </InstantSearch>
    </>
  );
}

export default Search;
