import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import { useStyles } from "../css/searchCSS";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const symRegex = /[`~!@#$%^&*(),.?;"':{}|/<>[\\\]]/;

const useStyles = makeStyles(theme => ({
  listsError: {
    width: "100%",
    maxWidth: 500,
    background: "#c50e29",
    color: "#fefefe",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
    borderRadius: "0 0 24px 24px"
  }
}));

const initialState = {
  paddingTop: 0,
  display: "flex",
  flexDirection: "column",
  width: "auto",
  maxWidth: "auto",
  background: "#fefefe",
  boxShadow:
    "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
  borderRadius: "0 0 24px 24px"
};

// Single index search return from Algolia
// Some rendering logic is being handled here
export const Autocomplete = ({
  currentRefinement,
  hits,
  searchingWidth,
  setMediumDevicesHeightElem
}) => {
  const classes = useStyles();

  React.useEffect(() => {
    const searchHeightElem =
      document.getElementById("search-city-results") &&
      document.getElementById("search-city-results").offsetHeight;

    setMediumDevicesHeightElem(searchHeightElem);
  });

  const reducer = (state, action) => {
    //! TODO: need to find implementation for mobile with the length of the cities
    if (searchingWidth !== 500) {
      // console.log("widthIt not equal to 500");
      return {
        ...state,
        width: searchingWidth,
        maxWidth: searchingWidth,
        margin: "auto"
      };
    }

    if (searchingWidth === 500) {
      // console.log("widthIt = 500");
      return {
        ...state,
        width: searchingWidth,
        maxWidth: searchingWidth,
        height: 350,
        overflow: "auto"
      };
    }
  };

  const [searchWidth, setSearchWidth] = React.useReducer(reducer, initialState);
  // console.log("searchWidth", searchWidth);

  React.useEffect(() => {
    setSearchWidth();
  }, []);

  //identify special chars from the user's input
  let symTester = symRegex.test(currentRefinement);

  if (symTester) {
    return (
      <List className={classes.listsError}>
        <ListItem>Please no special characters...try again</ListItem>
      </List>
    );
  }

  if (currentRefinement === "") {
    return null;
  }

  if (hits === "undefined" || hits.length === 0) {
    return (
      <List className={classes.listsError}>
        <ListItem>
          Is this a city?...I think you're lost in outer space
        </ListItem>
      </List>
    );
  } else {
    return (
      <List id='search-city-results' style={searchWidth}>
        {hits.map(hit => (
          <ListItem button key={hit.objectID}>
            <Link
              style={{
                textDecoration: "none",
                color: "#3C3D5A",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: "0.00938em",
                "&visited": {
                  color: "#3C3D5A"
                }
              }}
              to={{
                pathname: "/weather-card",
                state: { data: [hit.city, hit.state] }
              }}
            >
              {hit.city}, {hit.state}
            </Link>
          </ListItem>
        ))}
      </List>
    );
  }
};
