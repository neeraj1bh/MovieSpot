import React from "react";
import { Image } from "./MovieThumb.styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieThumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb-image" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb-image" />
    )}
  </div>
);

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};
export default MovieThumb;
