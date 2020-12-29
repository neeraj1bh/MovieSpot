import React from "react";
import NBlogo from "../../images/logo.svg";
import { Wrapper, Content, Logo } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Logo src={NBlogo} alt="app-logo" />
    </Content>
  </Wrapper>
);

export default Header;
