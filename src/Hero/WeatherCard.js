import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import CardMedia from "@material-ui/core/CardMedia";
import { Store, Errors, Loading } from "../App";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1
  },
  card: {
    width: 550,
    marginBottom: theme.spacing(6)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 50,
    width: 50
  }
}));

function WeatherCard() {
  const exCities = useContext(Store);
  const APIErrors = useContext(Errors);
  const isLoading = useContext(Loading);
  // console.log(`Cities retrieved from OpenWeatherMap`, exCities)
  // console.log(`API request errors? `, APIErrors)
  console.log("loading?", isLoading);

  const tutorialSteps = exCities;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const icon = exCities.length > 0 && exCities[activeStep].weather[0].icon;

  // Functions to show next and previous weather card
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  //Function Component to show the name of the City
  function CityName() {
    return (
      <Typography variant="h4">
        {exCities.length > 0 && exCities[activeStep].name}
      </Typography>
    );
  }

  return (
    <React.Fragment>
      {/* Show errors user feedback */}
      {APIErrors ? (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">
              Oh no...we are having technical issues...try again later
            </Typography>
          </CardContent>
        </Card>
      ) : isLoading ? (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h2">Loading...</Typography>
          </CardContent>
        </Card>
      ) : (
        <Card className={classes.card}>
          <CardHeader component={CityName} />
          <CardMedia
            className={classes.media}
            image={`http://openweathermap.org/img/w/${icon}.png`}
            title="city"
          />
          <CardContent>
            <Typography variant="h2">
              {exCities.length > 0 && parseInt(exCities[activeStep].main.temp)}
            </Typography>
            <Typography variant="h6">
              {exCities.length > 0 &&
                exCities[activeStep].weather[0].description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              Humidity:{" "}
              {exCities.length > 0 && exCities[activeStep].main.humidity}
            </Typography>
            <Typography variant="h6">
              Wind Speed:{" "}
              {exCities.length > 0 && exCities[activeStep].wind.speed}
            </Typography>
          </CardContent>
          <CardActions>
            <MobileStepper
              className={classes.root}
              steps={maxSteps}
              position="static"
              variant="dots"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </CardActions>
        </Card>
      )}
    </React.Fragment>
  );
}

export default WeatherCard;
