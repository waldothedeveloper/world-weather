import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { firestore } from "./Utils/firebase";
import * as data from "./Utils/country_names_iso_3166_2_digit.json";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function AddDataButton() {
  const classes = useStyles();

  function UploadData() {
    // console.log(JSON.stringify(data, null, 2));
    const db = firestore;
    if (typeof data === "object") {
      console.log("we have a JSON object");
      db.collection("city_codes_iso_3166")
        .add(data)
        .then(function(docRef) {
          console.log("Document uploaded ok!", docRef);
        })
        .catch(function(error) {
          console.log(`Something is wrong...${error}`);
        });
    }
  }

  return (
    <Button
      onClick={() => UploadData()}
      variant='contained'
      color='primary'
      className={classes.button}
    >
      Add Data
    </Button>
  );
}
