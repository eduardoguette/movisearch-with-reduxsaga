import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObj,
  },
  cardContainer: {
    flexDirection: "column",
    minWidth: "30%",
    height: 200,
    padding: "2rem",
    ...centeredStyleObj,
  },
  titulo: {
    fontSize: "3rem",
    alignText: "center",
    fontWeight: 600
  },
  titleGridContainer: {
    ...centeredStyleObj,
  },
  textFieldSearch: {
    width: "90%",
  },
  searchButton: {
    marginLeft: ".5rem",
  },
  buttonsContainer: {
    marginTop: ".5rem",
  },
  MovieIcon: {
    fontSize: "2em",
    color: "red"
  },
});
