import React, { useEffect } from "react";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import PropTypes from "prop-types";
const MovieInfo = ({ movie }) => {
  let backdrop = movie.backdrop_path
    ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
    : "#000";
  //   console.log(backdrop);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Wrapper backdrop={backdrop}>
      <Content>
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};
export default MovieInfo;
