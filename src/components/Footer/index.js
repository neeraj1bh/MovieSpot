import React from "react";
import NBlogo from "../../images/logo.svg";
import TMDBlogo from "../../images/tmdb.svg";

import {
  Wrapper,
  Content,
  Content1,
  Logo1,
  Logo2,
  Text,
} from "./Footer.styles";
import { Link } from "react-router-dom";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Content1>
          <Logo1 src={NBlogo} alt="app-logo" />
          <Text>
            <h1>MovieDB</h1>
          </Text>
        </Content1>
      </Link>
      <a
        href="https://themoviedb.org/"
        target="blank"
        style={{ textDecoration: "none" }}
      >
        <Content1>
          <Text>
            <h4>Powered by</h4>
          </Text>
          <Logo2 src={TMDBlogo} alt="tmdb-logo" />
        </Content1>
      </a>
    </Content>
  </Wrapper>
);

export default Header;
