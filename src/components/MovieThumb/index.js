import React from "react";
import { Image, Controls } from "./MovieThumb.styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../contexts/GlobalContext";
// import { useHomeFetch } from "../../hooks/useHomeFetch";

const MovieThumb = ({
  image,
  movie,
  //   addMovieHandler,
  //   removeMovieHandler,
  //   results,
  movieId,
}) => {
  //   let storedMovie =
  //     results &&
  //     results.find((movie) => parseInt(movie.id) === parseInt(movieId));
  //   const { loading } = useHomeFetch();

  const {
    currentUser,
    addMovieHandler,
    removeMovieHandler,
    watchlist,
  } = useAuth();
  //   console.log(results.length);

  let toWatch = watchlist.find((movie) => movie.id === movieId);
  const btnDisabled = toWatch ? true : false;

  return (
    <div>
      <Link to={`/${movieId}`} style={{ textDecoration: "inherit" }}>
        <Image src={image} alt="movie-thumb-image" />
      </Link>

      <Controls>
        {currentUser ? (
          <>
            <button
              className="Buttons"
              onClick={(e) => {
                addMovieHandler(movie);
              }}
              disabled={btnDisabled}
            >
              Add
            </button>

            <button
              className="Buttons"
              onClick={(e) => {
                removeMovieHandler(movieId);
              }}
              // disabled={storedMovie}
            >
              Remove
            </button>
          </>
        ) : (
          <button className="Buttons" disabled={true}>
            Login to Add
          </button>
        )}
      </Controls>
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
};
export default MovieThumb;
