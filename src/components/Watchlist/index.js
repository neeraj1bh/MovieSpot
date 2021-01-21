import React, { useEffect } from "react";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../config";
import NoImage from "../../images/noImage.png";
import MovieGrid from "../MovieGrid";
import MovieThumb from "../MovieThumb";
import AddToWatch from "../AddToWatch";
import Footer from "../Footer";
import { useAuth } from "../../contexts/GlobalContext";

const Watchlist = (props) => {
  //   console.log(similarMovie);
  //   const { results } = similarMovie;
  //   const singleSimilarMovie = [similarMovie];
  //   console.log(singleSimilarMovie);

  const { watchlist } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <MovieGrid header={watchlist.length > 0 ? "WatchList" : null}>
        {watchlist.map((movie) => (
          // console.log(movie)

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

      {watchlist.length <= 0 && <AddToWatch />}
      {watchlist.length > 5 && <Footer />}
    </>
  );
};
export default Watchlist;
