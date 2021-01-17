import React, { useEffect } from "react";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../config";
import { useHomeFetch } from "../../hooks/useHomeFetch";
import NoImage from "../../images/noImage.png";
import MovieGrid from "../MovieGrid";
import MovieThumb from "../MovieThumb";
import Spinner from "../Spinner";
import Error from "../Error";
import Footer from "../Footer";

const Similar = (props) => {
  const { similarMovie } = props.location.state;
  //   console.log(similarMovie);
  //   const { results } = similarMovie;
  //   const singleSimilarMovie = [similarMovie];
  //   console.log(singleSimilarMovie);

  const { state, loading, error } = useHomeFetch();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (error) return <Error />;

  return (
    <>
      <MovieGrid header={"Similar Movies"}>
        {similarMovie.results.map((movie) => (
          // console.log(movie)

          <MovieThumb
            key={movie.id}
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={true}
            movieId={movie.id}
          />
        ))}
      </MovieGrid>
      {loading && <Spinner />}
      {state.results.length <= 0 && <Error />}
      {!loading && state.results.length > 0 && <Footer />}
    </>
  );
};
export default Similar;
