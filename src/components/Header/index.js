import React from "react";
import NBlogo from "../../images/logo.svg";
import { Wrapper, Content, Logo, Text } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Logo src={NBlogo} alt="app-logo" />
      <Text>
        <h1>MovieDB</h1>
      </Text>
      
    </Content>
  </Wrapper>
);

export default Header;
