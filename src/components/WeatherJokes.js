import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../css/weatherjokesCSS";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import { jokes } from "../Utils/weatherjokes";

function WeatherJokes() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  //eslint-disable-next-line
  const [step, setStep] = useState(false);

  // Functions to show next and previous weather card
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setStep(true);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    setStep(true);
  }

  return (
    <>
      <Card raised={true} className={classes.card}>
        <CardContent className={classes.content}>
          <Typography className={classes.cityName} variant='h5' align='center'>
            {jokes[activeStep].question}
          </Typography>
          <Typography variant='h6' className={classes.colors} align='center'>
            {jokes[activeStep].answer}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <MobileStepper
            className={classes.root}
            steps={0 || jokes.length}
            position='static'
            variant='dots'
            activeStep={activeStep}
            nextButton={
              <Button
                className={classes.colors}
                size='small'
                onClick={handleNext}
                disabled={activeStep === jokes.length - 1}
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
                className={classes.colors}
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
    </>
  );
}

export default WeatherJokes;
