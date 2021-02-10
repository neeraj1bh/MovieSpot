import React, { useState, useEffect, useRef } from "react";

import searchIcon from "../../images/search.svg";
import { Wrapper, Content, Button } from "./SearchBar.styles";
import PropTypes from "prop-types";
import { useAuth } from "../../contexts/GlobalContext";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setstate] = useState("");
  const { toggle, setToggle } = useAuth();
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
          className="searchInput"
        />
      </Content>
      <Button>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "True" : "False"}
        </button>
      </Button>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};
export default SearchBar;
