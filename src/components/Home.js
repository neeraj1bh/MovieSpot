import React, { useState, useEffect } from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/logo.svg";
import { useHomeFetch } from "../hooks/useHomeFetch";
import HeroImage from "./Hero";
import MovieGrid from "./MovieGrid";
import MovieThumb from "./MovieThumb";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <MovieGrid header="Trending Movies">
        {state.results.map((movie) => (
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
    </>
  );
};

export default Home;
