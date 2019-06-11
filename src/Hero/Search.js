import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  root: {
    margin: "20px 0 20px 0",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    width: 500
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1.2,
    height: 34,
    margin: 4
  }
});

// This is the pride colors as a gradient but I like it
// linear-gradient(to right,#DF4998,#39BDB1,#00a9e5,#fed10a)

function Search() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(searchValue);
  // console.log("isValidZip: ", isValidZip);

  useEffect(() => {
    if (isValidZip) {
    }
  });

  return (
    <FormControl>
      <Paper className={classes.root}>
        <InputBase
          onChange={handleChange}
          value={searchValue}
          className={classes.input}
          autoFocus={true}
          placeholder='Search ZIP (US only), City or Place'
        />
        <Divider className={classes.divider} />
        <IconButton
          color='primary'
          className={classes.iconButton}
          aria-label='Directions'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </FormControl>
  );
}

export default Search;
