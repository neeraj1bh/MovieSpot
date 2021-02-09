import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";
import { useAuth } from "../contexts/GlobalContext";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { toggle } = useAuth();

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      // HomePage result
      const allResult = await API.fetchMovies(searchTerm, page);
    //   console.log(allResult);
      // SearchPage no duplicates result
      const ndResults = allResult.results.filter(
        (movie) => movie.vote_count > "10"
      );
      const movies = { ...allResult, results: ndResults };
      // Exact result
      const eResults = allResult.results.filter(
        (movie) => movie.title.toLowerCase() === searchTerm.toLowerCase()
      );
      const toggledMovies = { ...allResult, results: eResults };
    //   console.log(movies);
    //   console.log(searchTerm);
      searchTerm === null
        ? setState((prev) => ({
            ...allResult,
            results:
              page > 1
                ? [...prev.results, ...allResult.results]
                : [...allResult.results],
          }))
        : toggle
        ? setState((prev) => ({
            ...toggledMovies,
            results:
              page > 1
                ? [...prev.results, ...toggledMovies.results]
                : [...toggledMovies.results],
          }))
        : setState((prev) => ({
            ...movies,
            results:
              page > 1
                ? [...prev.results, ...movies.results]
                : [...movies.results],
          }));
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  //Search and Initial

  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More

  useEffect(() => {
    if (!isLoadingMore) return;
    //if (isLoadingMore) return; Auto calls the page increments no need to click the button
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, searchTerm]);

  //SetItem to Session Storage

  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
