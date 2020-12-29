import React from "react";
import { Wrapper, Content } from "./MovieGrid.styles";

const MovieGrid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default MovieGrid;
