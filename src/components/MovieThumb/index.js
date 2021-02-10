import React, { useState } from "react";
import { Image, Controls } from "./MovieThumb.styles";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../contexts/GlobalContext";
import Modal from "../Modal";
// import { useHomeFetch } from "../../hooks/useHomeFetch";

const MovieThumb = ({ image, movie, movieId }) => {
  //   let storedMovie =
  //     results &&
  //     results.find((movie) => parseInt(movie.id) === parseInt(movieId));
  //   const { loading } = useHomeFetch();

  const { currentUser, removeMovieHandler, moviesArray } = useAuth();
  //   console.log(results.length);

  let toWatch = moviesArray.find((movie) => movie.id === movieId);
  const btnDisabled = toWatch ? true : false;
  const [modal, setModal] = useState(false);
  const location = useLocation();
  //   console.log(location.pathname);
  return (
    <div>
      {modal && (
        <Modal
          closeModal={() => {
            setModal(false);
          }}
          movie={movie}
        />
      )}
      <Link to={`/${movieId}`} style={{ textDecoration: "inherit" }}>
        <Image src={image} alt="movie-thumb-image" />
      </Link>

      <Controls>
        {currentUser ? (
          <>
            {location.pathname === "/watchlist" ? (
              <button
                className="Buttons"
                onClick={(e) => {
                  //   console.log(e);
                  removeMovieHandler(movieId);
                }}
                // disabled={storedMovie}
              >
                Remove
              </button>
            ) : (
              <button
                className="Buttons"
                onClick={(e) => {
                  setModal(true);
                }}
                disabled={btnDisabled}
              >
                Add to Watchlist
              </button>
            )}
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
