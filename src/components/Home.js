import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/logo.svg";
import { useHomeFetch } from "../hooks/useHomeFetch";
import HeroImage from "./Hero";
import MovieGrid from "./MovieGrid";
import MovieThumb from "./MovieThumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();
  console.log(state);

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieGrid header={searchTerm ? "Search Results" : "Trending Movies"}>
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
      <Spinner />
    </>
  );
};

export default Home;
