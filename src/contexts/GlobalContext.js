import React, { useContext, useState, useEffect, useReducer } from "react";
import { auth } from "../firebase";

const GlobalContext = React.createContext();

export function useAuth() {
  return useContext(GlobalContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
//   const [email, setEmail] = useState("");
//   const [storedEmail, setStoredEmail] = useState();
//   let emailSet = email;

  const initialState = {
    watchlist: localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          watchlist: [action.payload, ...state.watchlist],
        };
      case "REMOVE":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }

  const addMovieHandler = (movie) => {
    dispatch({ type: "ADD", payload: movie });
  };

  const removeMovieHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    // console.log(emailSet);
    // if (emailSet !== "") {
    //   localStorage.setItem(emailSet, JSON.stringify(state.watchlist));
    // }
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
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
  };

  return (
    <GlobalContext.Provider value={value}>
      {!loading && children}
    </GlobalContext.Provider>
  );
}
