import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    padding: "4px",
    display: "flex",
    alignItems: "center",
    width: 500,
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
    borderRadius: "0",
    backgroundColor: "#fefefe"
  },
  paper: {
    position: "absolute",
    outline: "none"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  lists: {
    width: "100%",
    maxWidth: 500,
    background: "#fefefe",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
    borderRadius: "0 0 24px 24px"
  },
  listsError: {
    width: "100%",
    maxWidth: 500,
    background: "#fefefe",
    color: "#DC143C",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
    borderRadius: "0 0 24px 24px"
  },
  autoComplete: {
    display: "none"
  }
}));
