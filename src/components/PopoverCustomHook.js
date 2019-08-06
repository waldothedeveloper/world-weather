import React from "react";

export const PopoverCustomHook = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log("anchorEl on Popover Custom Hook: ", anchorEl);

  const handleClick = e => {
    // console.log("event on popover: ", e);
    setAnchorEl(prev => (prev ? null : e));
  };

  return [{ anchorEl }, handleClick];
};
