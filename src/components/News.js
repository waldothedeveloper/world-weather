import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import NewsApi_Request from "../Utils/NewsApi_Request";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "2rem",
    position: "relative",
    overflow: "auto",
    maxHeight: 450
  },
  lists: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    marginTop: "2em"
  },
  inline: {
    display: "inline"
  }
}));

function News() {
  const classes = useStyles();
  const [{ data, isError, isLoading }] = NewsApi_Request();
  console.log("data: ", data);
  console.log("data: ", typeof data);
  return (
    <div className={classes.root}>
      null
      {data.map(article => {
        return (
          <List key={article.publishedAt} className={classes.lists}>
            <ListItem alignItems='flex-start' key={article.publishedAt}>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src={article.urlToImage} />
              </ListItemAvatar>
              <ListItemText
                primary={article.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component='span'
                      variant='body2'
                      className={classes.inline}
                      color='textPrimary'
                    >
                      Ali Connors{"- "}
                    </Typography>
                    {article.description}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </List>
        );
      })}
    </div>
  );
}

export default News;
