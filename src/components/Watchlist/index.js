import React, { useEffect } from "react";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../config";
import NoImage from "../../images/noImage.png";
import MovieGrid from "../MovieGrid";
import MovieThumb from "../MovieThumb";
import AddToWatch from "../AddToWatch";
import Footer from "../Footer";
import { useAuth } from "../../contexts/GlobalContext";
import { WatchHeader } from "./Watchlist.styled.js";

const Watchlist = (props) => {
  //   console.log(similarMovie);
  //   const { results } = similarMovie;
  //   const singleSimilarMovie = [similarMovie];
  //   console.log(singleSimilarMovie);

  const { watchlist, moviesArray } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {moviesArray.length > 0 && <WatchHeader>WatchList</WatchHeader>}

      {moviesArray.length > 0 &&
        watchlist.map((movie) => (
          // console.log(movie)
          <MovieGrid
            header={movie.movies.length > 0 ? movie.title : null}
            key={movie.id}
          >
            {movie.movies.map((movie) => (
              <MovieThumb
                key={movie.id}
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
                movieId={movie.id}
              />
            ))}
          </MovieGrid>
        ))}

      {moviesArray.length <= 0 && <AddToWatch />}
      {<Footer />}
    </>
  );
};
export default Watchlist;
