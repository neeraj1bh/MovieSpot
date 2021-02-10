import React, { useState } from "react";

import { Wrapper, Content, WatchWrapper } from "./Modal.styles";

import { useAuth } from "../../contexts/GlobalContext";
import { v4 as uuid } from "uuid";

const Modal = ({ closeModal, movie }) => {
  const [value, setValue] = useState("");
  const { addMovieHandler, addWatchlist, watchlist, moviesArray } = useAuth();

  const addMoreList = (value) => {
    if (value === "") {
      return;
    }

    if (watchlist.find((movies) => movies.title === value)) {
      return;
    }
    const newListId = uuid();
    const newList = {
      id: newListId,
      title: value,
      movies: [],
    };
    addWatchlist(newList);
  };

  const addMovie = (data) => {
    const newMovie = {
      movie: data.movie,
      title: data.title,
    };

    addMovieHandler(newMovie);
  };

  let toWatch = moviesArray.find((movies) => movies.id === movie.id);
  const btnDisabled = toWatch ? true : false;

  return (
    <Wrapper>
      <Content>
        <button onClick={closeModal} className="cancelBtn">
          X
        </button>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addMoreList(value);
            setValue("");
          }}
          className="formWrapper"
        >
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Add Watchlist Name"
            className="formInput"
            maxLength="15"
          />

          <button type="submit" className="submitBtn">
            Add
          </button>
        </form>

        <WatchWrapper>
          {watchlist.map((movies) => {
            let id = movies.id;
            let title = movies.title;

            return (
              <button
                onClick={(e) => {
                  let data = { movie, title };
                  addMovie(data);
                }}
                disabled={btnDisabled}
                key={id}
              >
                {title}
              </button>
            );
          })}
        </WatchWrapper>
      </Content>
    </Wrapper>
  );
};

export default Modal;
