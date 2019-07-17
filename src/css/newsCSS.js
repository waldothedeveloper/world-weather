import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
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
    marginBottom: "1.2rem"
  },
  divide: {
    backgroundColor: "#e7f1f7"
  },
  divisor: {
    backgroundColor: "#e7f1f7",
    marginLeft: "12rem",
    marginRight: "2rem"
  },
  inline: {
    display: "flex",
    flexDirection: "column"
  },
  imgWrapper: {
    paddingRight: "2.5em",
    objectFit: "cover"
  },
  img: {
    maxWidth: "100%",
    height: "auto"
  },
  newsFeed: {
    margin: "6px 0 0 0",
    flex: "1 1 auto",
    minWidth: 0
  },
  title: {
    color: "#fefefe"
  },
  subtitle: {
    color: "#eaeaea"
  },
  links: {
    color: "#fa113d"
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
