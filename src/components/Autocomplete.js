import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import { useStyles } from "../css/searchCSS";
import { makeStyles } from "@material-ui/core/styles";

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

const reducer = (state, action) => {
  const widthIt = document.getElementsByClassName(
    "MuiPaper-root MuiPaper-elevation1 makeStyles-root-192 MuiPaper-rounded"
  )[0].offsetWidth;

  if (widthIt !== 500) {
    // console.log("widthIt not equal to 500");
    return {
      ...state,
      width: widthIt,
      maxWidth: widthIt,
      margin: "auto"
    };
  }

  if (widthIt === 500) {
    // console.log("widthIt = 500");
    return {
      ...state,
      width: widthIt,
      maxWidth: widthIt
    };
  }
};

// Single index search return from Algolia
// Some rendering logic is being handled here
export const Autocomplete = ({ currentRefinement, hits, setQueryHits }) => {
  const classes = useStyles();

  const [searchWidth, setSearchWidth] = React.useReducer(reducer, initialState);
  console.log("searchWidth", searchWidth);

  React.useEffect(() => {
    setSearchWidth();
    //eslint-disable-next-line
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
      <List style={searchWidth}>
        {hits.map(hit => (
          <ListItem
            button
            onClick={e => {
              setQueryHits(hit);
              e.preventDefault();
            }}
            key={hit.objectID}
          >
            {hit.name}
          </ListItem>
        ))}
      </List>
    );
  }
};
