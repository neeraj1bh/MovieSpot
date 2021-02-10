import React, { useContext, useState, useEffect, useReducer } from "react";
import { auth } from "../firebase";

const GlobalContext = React.createContext();

export function useAuth() {
  return useContext(GlobalContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "WATCH":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "ADD":
      let movieId = action.payload.movie.id;
      let watchlistTitle = action.payload.title;

      const newData = {
        id: movieId,
        title: watchlistTitle,
      };

      let newMovieList = state.watchlist.filter(
        (watchlist) => watchlist.title === watchlistTitle
      );

      let moviesAll = action.payload.movie;

      newMovieList[0].movies.push(moviesAll);

      let allMovieList = state.watchlist.filter(
        (movie) => movie.title !== watchlistTitle
      );

      return {
        ...state,
        moviesArray: [newData, ...state.moviesArray],
        watchlist: [...newMovieList, ...allMovieList],
      };
    case "REMOVE":
      let toRemove = state.moviesArray.find(
        (movie) => movie.id === action.payload
      );

      let newMoviesArray = state.moviesArray.filter(
        (movie) => movie.id !== action.payload
      );

      let RnewMovieList = state.watchlist.filter(
        (movie) => movie.title === toRemove.title
      );

      let slicedMovies = RnewMovieList[0].movies.filter(
        (movie) => movie.id !== action.payload
      );

      RnewMovieList[0].movies = slicedMovies;
      let RallMovieList = state.watchlist.filter(
        (movie) => movie.title !== toRemove.title
      );

      return {
        ...state,
        watchlist: [...RnewMovieList, ...RallMovieList],
        moviesArray: [...newMoviesArray],
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [storedEmail, setStoredEmail] = useState();
  //   let emailSet = email;

  const initialState = {
    watchlist: localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [],
    moviesArray: localStorage.getItem("moviesArray")
      ? JSON.parse(localStorage.getItem("moviesArray"))
      : [],
  };

  // When memoizing the reducer  you can add the function inside AuthProvider else declare it outside
  //   const memoized = useCallback(reducer, []);
  //   const [state, dispatch] = useReducer(memoized, initialState);

  const [state, dispatch] = useReducer(reducer, initialState);

  const addMovieHandler = (movie) => {
    dispatch({ type: "ADD", payload: movie });
  };

  const removeMovieHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const addWatchlist = (e) => {
    dispatch({ type: "WATCH", payload: e });
  };

  useEffect(() => {
    // console.log(emailSet);
    // if (emailSet !== "") {
    //   localStorage.setItem(emailSet, JSON.stringify(state.watchlist));
    // }
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("moviesArray", JSON.stringify(state.moviesArray));
  }, [state]);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      //   setEmail(user.email);
      // localStorage.setItem("email", JSON.stringify(user.email));

      //   let emailStorage =
      //     JSON.parse(localStorage.getItem("email")) === user.email;
      //   setStoredEmail(emailStorage);
      //   console.log("Stored" + JSON.parse(localStorage.getItem("email")));
      //   console.log("DB" + user.email);
      //   console.log(storedEmail);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    addMovieHandler,
    removeMovieHandler,
    watchlist: state.watchlist,
    toggle,
    setToggle,
    addWatchlist,
    dispatch,
    moviesArray: state.moviesArray,
  };

  return (
    <GlobalContext.Provider value={value}>
      {!loading && children}
    </GlobalContext.Provider>
  );
}
