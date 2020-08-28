import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress } from "@material-ui/core";
import queryString from "query-string";
import MoviesResults from "../MoviesResults/MoviesResults";
import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selectors";

function Search({ location }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => movieResults(state));
  const isLoading = useSelector((state) => isSearchLoading(state));

  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (!isLocked) {
      dispatch(searchMovie({ movieName }));
      setIsLocked(true);
    }
  }, [location.search, isLocked, dispatch],[isLocked]);

  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => <MoviesResults key={index} {...value} />);
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    } else if (!movies) {
      return <h1>No results</h1>;
    }
    return <div />;
  };

  return <Container>{renderMovies()}</Container>;
}

export default Search;
