import React from "react";
import Grid from "@material-ui/core/Grid";

function SectionD(props) {
  return (
    <>
      <>{props.galleryPreview}</>
      <Grid
        container
        direction='row-reverse'
        justify='center'
        alignItems='center'
        //need to fix this line of code below later
        style={{ padding: "2rem 14rem" }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {props.partC}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {props.partD}
        </Grid>
      </Grid>
    </>
  );
}

export default SectionD;
