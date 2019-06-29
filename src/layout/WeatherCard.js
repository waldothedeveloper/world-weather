import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../css/weathercardCSS";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
// import Clock from "./Clock";
import Temperature from "./Temperature";
import ApiRequest from "../Utils/ApiResquest";

function WeatherCard() {
  const [{ data, isError, isLoading }] = ApiRequest();
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [test, setTest] = useState(false);

  const dataReceived = data;

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
      {dataReceived.length === 0 ? (
        <div>Loading...</div>
      ) : isError ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography align='center' variant='h4'>
              Oh no...we are having technical issues...try again later
            </Typography>
          </CardContent>
        </Card>
      ) : isLoading ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography align='center' variant='h2'>
              Loading...This will take a second
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card raised={true} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cityName} variant='h3'>
              {dataReceived.data.list[activeStep].name}
            </Typography>
            <Temperature
              test={test}
              temperature={parseInt(
                dataReceived.data.list[activeStep].main.temp
              )}
            />

            <Typography variant='h6' className={classes.colors}>
              {dataReceived.data.list[activeStep].weather[0].description}
            </Typography>
          </CardContent>
          <CardContent className={classes.cardContent}>
            {/* <Clock activeStep={activeStep} data={dataReceived.data.list} /> */}
            <Typography variant='h6' className={classes.colors}>
              {" "}
              Humidity: {dataReceived.data.list[activeStep].main.humidity}
            </Typography>
            <Typography variant='h6' className={classes.colors}>
              Wind Speed: {dataReceived.data.list[activeStep].wind.speed}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <MobileStepper
              className={classes.root}
              steps={0 || dataReceived.data.list.length}
              position='static'
              variant='dots'
              activeStep={activeStep}
              nextButton={
                <Button
                  size='small'
                  onClick={handleNext}
                  disabled={activeStep === dataReceived.data.list.length - 1}
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
                  size='small'
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
    </>
  );
}

export default WeatherCard;
