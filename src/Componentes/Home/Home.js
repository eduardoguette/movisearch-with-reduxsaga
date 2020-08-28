import React, { useState } from "react";
import { Container, Typography, Card, Grid, TextField, Button } from "@material-ui/core";
import styles from "./styles";
import MovieIcon from "../../Icons/Movieicon"



function Home({history}) {
  const classes = styles();
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCleanTextClick = (event) => {
    setSearchText("");
  };

  const handleSearchTextClick = (event) => {
    history.push(`/results?movieName=${searchText}`)
  };


  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.titulo}>moviesearch</Typography>
          </Grid>
          <Grid>
            
            <MovieIcon className={classes.MovieIcon}/>
          </Grid>
        </Grid>
        <TextField className={classes.textFieldSearch} value={searchText} placeholder="Buscar..." onChange={handleSearchTextChange} />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleCleanTextClick}>
            Limpiar
          </Button>
          <Button className={classes.searchButton} variant="contained" color="primary" onClick={handleSearchTextClick}>
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
}

export default Home;
