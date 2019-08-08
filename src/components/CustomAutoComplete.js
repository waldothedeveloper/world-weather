import React from "react";
import { connectAutoComplete, connectSearchBox } from "react-instantsearch-dom";
import { Autocomplete } from "./Autocomplete";
import { MaterialUISearchBox } from "./MaterialUISearchBox";

const ConnectedSearchBox = connectSearchBox(MaterialUISearchBox);

const CustomAutocomplete = props => {
  // console.log("props in auto-complete: ", props);
  return (
    <>
      <ConnectedSearchBox {...props} />
      <Autocomplete {...props} />
    </>
  );
};

export const HOCautoCompleted = connectAutoComplete(CustomAutocomplete);
