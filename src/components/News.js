import React from "react";
import Divider from "@material-ui/core/Divider";
import NewsApi_Request from "../Utils/NewsApi_Request";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import { useStyles } from "../css/newsCSS";
import Grid from "@material-ui/core/Grid";

// This resolves to nothing and doesn't affect browser history
//eslint-disable-next-line
const dudUrl = "javascript:;";

function News() {
  const classes = useStyles();
  const [{ data, isError, isLoading }] = NewsApi_Request();
  // console.log("data: ", data);

  return (
    <>
      <div className={classes.news}>
        <Typography className={classes.maintitle} variant='h4'>
          Weather News
        </Typography>
        <Link href={dudUrl} className={classes.link}>
          See more...
        </Link>
      </div>
      <Divider className={classes.divide} variant='fullWidth' />
      {isError ? (
        <Card className={classes.card}>
          <Typography component='h5' variant='h5'>
            Something went wrong...Try again
          </Typography>
        </Card>
      ) : isLoading ? (
        <div style={{ display: "flex", height: "auto" }}>
          <CircularProgress style={{ margin: "auto" }} />
        </div>
      ) : (
        <List className={classes.root}>
          {data.map((article, id) => {
            return (
              <Link
                className={classes.links}
                href={article.url}
                target='_blank'
                rel='noreferrer prefetch'
                key={id}
              >
                <Grid
                  className={classes.cont}
                  container
                  direction='row'
                  justify='center'
                >
                  <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <figure className={classes.imgWrapper}>
                      <img
                        loading='lazy'
                        width='100%'
                        height='auto'
                        className={classes.img}
                        src={
                          article.urlToImage ||
                          `https://via.placeholder.com/180x180?text=Image+Not+Available`
                        }
                        alt={article.title}
                      />
                    </figure>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography
                      className={classes.title}
                      variant='h4'
                      component='p'
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      className={classes.subtitle}
                      variant='h6'
                      component='p'
                      gutterBottom
                    >
                      {article.description}
                    </Typography>
                    <Typography
                      style={{ marginTop: "2em" }}
                      className={classes.subtitle}
                      variant='body1'
                      component='p'
                      gutterBottom
                    >
                      {article.content}
                    </Typography>
                  </Grid>
                  <Divider
                    className={classes.divisor}
                    variant='inset'
                    component='li'
                  />
                </Grid>
              </Link>
            );
          })}
        </List>
      )}
    </>
  );
}

export default News;
