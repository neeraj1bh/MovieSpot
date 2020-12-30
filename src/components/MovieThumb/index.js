import React from "react";
import { Image } from "./MovieThumb.styles";
import { Link } from "react-router-dom";

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

export default MovieThumb;
