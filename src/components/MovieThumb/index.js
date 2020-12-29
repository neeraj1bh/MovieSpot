import React from "react";
import { Image } from "./MovieThumb.styles";

const MovieThumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb-image" />
  </div>
);

export default MovieThumb;
