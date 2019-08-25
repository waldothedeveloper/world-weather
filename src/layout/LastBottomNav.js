import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Poll from "@material-ui/icons/Poll";
import PartyMode from "@material-ui/icons/PartyMode";
import Public from "@material-ui/icons/Public";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root2: {
    background: "#e7f1f7"
  },
  fab: {
    margin: theme.spacing(1),
    color: "#aaa9b7",
    "&:hover": {
      background: "linear-gradient( to right, #27CDE8 10%, #3CA4EC 100%)",
      color: "#fefefe"
    }
  }
}));

export default function LastBottomNav() {
  const [currentYear, getCurrentYear] = React.useState("");
  const classes = useStyles();

  React.useEffect(() => {
    getCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Grid
        className={classes.root2}
        container
        direction='row'
        alignItems='center'
      >
        <Divider
          component='hr'
          variant='fullWidth'
          style={{ width: "100%", height: "1.2px" }}
        />

        <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
          <Fab aria-label='add' className={classes.fab}>
            <Poll fontSize='small' />
          </Fab>
          <Fab aria-label='add' className={classes.fab}>
            <PartyMode fontSize='small' />
          </Fab>
          <Fab aria-label='add' className={classes.fab}>
            <Public fontSize='small' />
          </Fab>
        </Grid>
        <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
          <Typography variant='body2' style={{ color: "#aaa9b7" }}>
            Copyright &copy; &nbsp;
            {currentYear} WeatherKast.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
