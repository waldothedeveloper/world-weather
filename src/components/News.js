import React from "react";
import Divider from "@material-ui/core/Divider";
import NewsApi_Request from "../Utils/NewsApi_Request";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import { useStyles } from "../css/newsCSS";
import Grid from "@material-ui/core/Grid";

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
          See more...
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
        <List className={classes.root}>
          {data.map((article, id) => {
            return (
              <Grid container direction='row' justify='center' key={id}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Link
                    className={classes.links}
                    href={article.url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <figure className='imgWrapper'>
                      <img
                        className={classes.img}
                        src={
                          article.urlToImage ||
                          `https://via.placeholder.com/180x180?text=Image+Not+Available`
                        }
                        alt={article.title}
                      />
                    </figure>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Link
                    className={classes.links}
                    href={article.url}
                    target='_blank'
                    rel='noreferrer'
                  >
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
                  </Link>
                </Grid>
                <Divider
                  className={classes.divisor}
                  variant='inset'
                  component='li'
                />
              </Grid>
            );
          })}
        </List>
      )}
    </>
  );
}

export default News;
