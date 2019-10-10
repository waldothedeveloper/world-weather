import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    marginTop: "4rem"
  },
  card: {
    height: 450,
    maxWidth: 365
  },
  media: {
    height: 140
  },
  text: {
    height: 194
  },
  mobileStep: {
    background: "#FFF"
  }
});

export default function MediaCard({ data }) {
  // console.log("data: ", data);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;
  const theme = useTheme();
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      {data.length !== 0 && (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={
                data[activeStep].urlToImage ||
                `https://via.placeholder.com/180x180?text=Image+Not+Available`
              }
              title={data[activeStep].title}
            />
            <CardContent className={classes.text}>
              <Typography gutterBottom variant='h5' component='h2'>
                {data[activeStep].title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {data[activeStep].description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              <Link
                className={classes.links}
                href={data[activeStep].url}
                target='_blank'
                rel='noreferrer prefetch'
              >
                Read More
              </Link>
            </Button>
          </CardActions>
          <CardContent>
            <MobileStepper
              classes={{ root: classes.mobileStep }}
              steps={maxSteps}
              position='static'
              variant='text'
              activeStep={activeStep}
              nextButton={
                <Button
                  size='small'
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
          </CardContent>
        </Card>
      )}
    </div>
  );
}
