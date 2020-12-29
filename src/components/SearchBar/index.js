import React, { useState, useEffect, useRef } from "react";

import searchIcon from "../../images/logo.svg";
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setstate] = useState("");

  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Enter Movie to Search"
          onChange={(e) => setstate(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
