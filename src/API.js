import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from "./config";

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchSimilar: async (movieId) => {
    const similar = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    return await (await fetch(similar)).json();
  },
};

export default apiSettings;
