import React from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";
// import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: 0
  }
}));

//step 1
const ClearResults = ({ items, refine }) => {
  // console.log("items: ", !items.length);
  const classes = useStyles();
  return (
    <IconButton
      onClick={() => refine(items)}
      color='primary'
      aria-label='Clear Results'
      className={classes.fab}
      disabled={!items.length}
    >
      <Clear />
    </IconButton>
  );
};

// step 2
const CustomClearResults = connectCurrentRefinements(ClearResults);

// step 3
export default CustomClearResults;
