import React from "react";
import { useStyles } from "../css/bottomNavCSS";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

export default function BottomNav() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Grid
        className={classes.grItem}
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
      >
        <Typography variant='h4' gutterBottom align='left'>
          Weatherkast.
        </Typography>
        <Typography variant='body1' gutterBottom align='left'>
          There are many variations of passages of Lorem Ipsum but the majority
          have suffered. There are many variations of passages.
        </Typography>
      </Grid>
      <Grid
        className={classes.grItem}
        item
        xs={12}
        sm={12}
        md={2}
        lg={2}
        xl={2}
      >
        <Typography variant='h6' gutterBottom align='left'>
          Severe weather.
        </Typography>
        <div className={classes.links}>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            Tropical &amp; hurricane
          </Link>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            Storm reports
          </Link>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            Severe alerts
          </Link>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            Latest news
          </Link>
        </div>
      </Grid>
      <Grid
        className={classes.grItem}
        item
        xs={12}
        sm={12}
        md={2}
        lg={2}
        xl={2}
      >
        <Typography variant='h6' gutterBottom align='left'>
          Local weather.
        </Typography>
        <div className={classes.links}>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            My favorites
          </Link>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            History data
          </Link>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            Weather storm
          </Link>
        </div>
      </Grid>
      <Grid
        className={classes.grItem}
        item
        xs={12}
        sm={12}
        md={2}
        lg={2}
        xl={2}
      >
        <Typography variant='h6' gutterBottom align='left'>
          Photo videos.
        </Typography>
        <div className={classes.links}>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            Photo galleries
          </Link>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            World view
          </Link>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            Web cams
          </Link>
          <Link
            className={classes.button}
            component='button'
            variant='body2'
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            New photos
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}
