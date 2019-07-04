import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import NewsApi_Request from "../Utils/NewsApi_Request";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "2rem",
    position: "relative",
    overflow: "auto",
    maxHeight: 450
  },
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: "2rem",
    height: "2rem"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  maintitle: {
    color: "#FEFEFE",
    fontWeight: 700
  },
  link: {
    color: "#fefefe",
    fontSize: "1rem",
    fontWeight: 500,
    alignSelf: "center"
  },
  news: {
    width: "100%",
    alignItems: "center",
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "2rem"
  },
  divide: {
    backgroundColor: "#e7f1f7"
  },
  divisor: {
    backgroundColor: "#e7f1f7",
    marginLeft: "12rem",
    marginRight: "2rem"
  },
  img: {
    objectFit: "cover",
    width: "180px",
    height: "180px",
    paddingRight: "2.5em"
  },
  text: {
    color: "#fefefe"
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey"
    }
  }
}));

// This resolves to nothing and doesn't affect browser history
const dudUrl = "javascript:;";

function News() {
  const classes = useStyles();
  const [{ data, isError, isLoading }] = NewsApi_Request();
  console.log("data: ", data);

  return (
    <>
      <div className={classes.news}>
        <Typography className={classes.maintitle} variant='h4'>
          Weather News
        </Typography>
        <Link href={dudUrl} className={classes.link}>
          See all...
        </Link>
      </div>
      <Divider className={classes.divide} variant='fullWidth' />
      {isError ? (
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component='h5' variant='h5'>
                Something went wrong...Try again
              </Typography>
            </CardContent>
          </div>
        </Card>
      ) : isLoading ? (
        <div style={{ display: "flex", height: "auto" }}>
          <CircularProgress style={{ margin: "auto" }} />
        </div>
      ) : (
        <div className={classes.root}>
          {data.map(article => {
            return (
              <List key={article.publishedAt} className={classes.root}>
                <ListItem>
                  <ListItemAvatar>
                    <img
                      className={classes.img}
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    classes={{
                      root: classes.text,
                      secondary: classes.text
                    }}
                    primary={article.title}
                    secondary={article.description}
                  />
                </ListItem>
                <Divider
                  className={classes.divisor}
                  variant='inset'
                  component='li'
                />
              </List>
            );
          })}
        </div>
      )}
    </>
  );
}

export default News;
