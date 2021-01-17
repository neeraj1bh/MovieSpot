import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router-dom";
import MovieGrid from "./MovieGrid";
import Spinner from "./Spinner";
import NoImage from "../images/noImage.png";
import { useMovieFetch } from "../hooks/useMovieFetch";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
import Footer from "./Footer";
import Error from "./Error";

const Movie = () => {
  const { movieId } = useParams();
  //   if (sessionStorage.getItem(movieId) === undefined) {
  // console.log("Yo this is undefined" + movieId);
  // <Error />;

  //   }
  if (sessionStorage.getItem(movieId) === "undefined") {
    //   setLoading(false);
    //   setError(true);
    sessionStorage.removeItem(movieId);
    //  return;
  }

  const { state: movie, loading, error } = useMovieFetch(movieId);
//   console.log(sessionStorage.getItem(movieId));
//   console.log(movie, loading, error);

  if (loading) return <Spinner />;
  if (error) return <Error />;
//   console.log(movie);

  return (
    <>
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
        released={movie.release_date}
        similar={movie.similarMovies}
        id={movie.id}
      />
      <MovieGrid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </MovieGrid>
      {!loading && <Footer />}
    </>
  );
};

export default Movie;
