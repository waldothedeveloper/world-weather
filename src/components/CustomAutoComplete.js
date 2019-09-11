import React from "react";
import { connectAutoComplete, connectSearchBox } from "react-instantsearch-dom";
import { Autocomplete } from "./Autocomplete";
import { MaterialUISearchBox } from "./MaterialUISearchBox";

const ConnectedSearchBox = connectSearchBox(MaterialUISearchBox);

const CustomAutocomplete = props => {
  const [searchingWidth, setSearchingWidth] = React.useState(0);
  // console.log("searchingWidth: ", searchingWidth);

  return (
    <>
      <ConnectedSearchBox setSearchingWidth={setSearchingWidth} {...props} />
      <Autocomplete searchingWidth={searchingWidth} {...props} />
    </>
  );
};

export const HOCautoCompleted = connectAutoComplete(CustomAutocomplete);
