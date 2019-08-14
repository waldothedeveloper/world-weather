import React from "react";
import Grid from "@material-ui/core/Grid";

function SectionD(props) {
  return (
    <>
      <>{props.galleryPreview}</>
      <Grid container direction='row' justify='center' alignItems='center'>
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
