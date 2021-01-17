import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        const similarMovies = await API.fetchSimilar(movieId);

        setState({
          ...movie,
          actors: credits.cast,
          directors,
          similarMovies: similarMovies,
        });
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };

    // if (sessionStorage.getItem(movieId) === "undefined") {
    // //   setLoading(false);
    // //   setError(true);
    //   sessionStorage.removeItem(movieId);
    //   return;
    // }
    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    fetchMovie();
  }, [movieId]);

  // Write to Session Storage

  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
