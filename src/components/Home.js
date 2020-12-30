import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/noImage.png";
import { useHomeFetch } from "../hooks/useHomeFetch";
import HeroImage from "./Hero";
import MovieGrid from "./MovieGrid";
import MovieThumb from "./MovieThumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
import Error from "./Error";
import Footer from "./Footer";

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();
  //   console.log(state);

  if (error) return <Error />;

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
      <MovieGrid
        header={
          searchTerm
            ? state.results.length > 0
              ? "Search Results"
              : null
            : "Trending Movies"
        }
      >
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
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
      {state.results.length <= 0 && <Error />}
      {!loading && state.results.length > 0 && <Footer />}
    </>
  );
};

export default Home;
