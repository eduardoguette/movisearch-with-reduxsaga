import React, { Fragment } from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import styles from "./styles";

function MoviesResults({ Title, Poster, Type, Year, imdbID, history }) {
  const classes = styles();

  const handleSeeMovieClick = () => {
    history.push(`/movie/${imdbID}`);
  };

  return (
    <Fragment>
      {Poster.includes("http") ? (
        <Card className={classes.cardContainer}>
          <Grid container>
            <Grid item>
              <img src={Poster} alt={Title} className={classes.poster} />
            </Grid>
            <Grid item className={classes.titlesContainer}>
              <Typography>{Title}</Typography>
              <Typography>{Year}</Typography>
              <Typography>{Type}</Typography>
              <Button color="primary" onClick={handleSeeMovieClick} variant="contained">
                Details
              </Button>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <div />
      )}
    </Fragment>
  );
}

export default withRouter(MoviesResults);
