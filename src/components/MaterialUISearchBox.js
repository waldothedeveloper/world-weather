import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { PoweredBy } from "react-instantsearch-dom";
import CustomClearResults from "./CustomClearResults";
import { useStyles } from "../css/searchCSS";
//Search component Material UI based
export const MaterialUISearchBox = ({ currentRefinement, refine }) => {
  const classes = useStyles();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log("Form submitted...please select a city");
      }}
    >
      <Paper className={classes.root}>
        <InputBase
          onSubmit={e => e.preventDefault()}
          onChange={e => refine(e.target.value)}
          value={currentRefinement}
          className={classes.input}
          autoFocus={true}
          required={true}
          type='text'
          placeholder='Search any City in the USA'
          // Limit the length of the input when it's something that makes no sense like: asdoij1o234o234342we234
          inputProps={{ maxLength: 85 }}
        />
        <PoweredBy />

        <CustomClearResults clearsQuery />
      </Paper>
    </form>
  );
};
