import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import Clock from "./Clock";
import Temperature from "./Temperature";
import ApiRequest from "../Utils/ApiResquest";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    background: "none"
  },

  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 700,
    marginBottom: theme.spacing(6),
    backgroundColor: "#ffffff",
    backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)"
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
  },
  actions: {
    display: "block",
    width: "100%"
  },
  cardContent: {
    width: "50%"
  },
  colors: {
    color: "#aaa9b7"
  }
}));

// background-color: #21D4FD;
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

function WeatherCard() {
  const [{ data, isError, isLoading }] = ApiRequest();

  // const tutorialSteps = data;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;
  const [test, setTest] = useState(false);

  // Functions to show next and previous weather card
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setTest(true);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    setTest(true);
  }

  return (
    <>
      {/* Show errors user feedback */}
      {isError ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography align='center' variant='h6'>
              Oh no...we are having technical issues...try again later
            </Typography>
          </CardContent>
        </Card>
      ) : isLoading ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography align='center' variant='h2'>
              Loading...
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card raised={true} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant='h4'>
              <img
                className={classes.media}
                src={
                  isLoading
                    ? "http://placehold.jp/50x50.png"
                    : `http://openweathermap.org/img/w/${data.length > 0 &&
                        data[activeStep].weather[0].icon}.png`
                }
                alt='cities'
              />
              {data.length > 0 && data[activeStep].name}
            </Typography>
            {/* The temperature Component */}
            <Temperature
              test={test}
              temperature={
                data.length > 0 && parseInt(data[activeStep].main.temp)
              }
            />

            <Typography variant='h6' className={classes.colors}>
              {data.length > 0 && data[activeStep].weather[0].description}
            </Typography>
          </CardContent>
          <CardContent className={classes.cardContent}>
            <Clock activeStep={activeStep} />
            <Typography variant='h6' className={classes.colors}>
              {" "}
              Humidity:{" "}
              {DataTransfer.length > 0 && data[activeStep].main.humidity}
            </Typography>
            <Typography variant='h6' className={classes.colors}>
              Wind Speed: {data.length > 0 && data[activeStep].wind.speed}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <MobileStepper
              className={classes.root}
              steps={maxSteps}
              position='static'
              variant='dots'
              activeStep={activeStep}
              nextButton={
                <Button
                  size='small'
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={

                <Button
                  size='small'
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >

                <Button onClick={handleBack} disabled={activeStep === 0}>

                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default WeatherCard;
