import React from "react";
import { Wrapper, Content } from "./MovieGrid.styles";
import PropTypes from "prop-types";

const MovieGrid = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

MovieGrid.propTypes = {
  header: PropTypes.string,
};
export default MovieGrid;
