import React from "react";
import NBlogo from "../../images/logo.svg";
import { Wrapper, Content, Logo, Text } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex" }}>
          <Logo src={NBlogo} alt="app-logo" />
          <Text>
            <h1>MovieDB</h1>
          </Text>
        </div>
      </Link>
    </Content>
  </Wrapper>
);

export default Header;
