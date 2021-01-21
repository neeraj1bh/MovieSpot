import React, { useState } from "react";
import NBlogo from "../../images/logo.svg";
import {
  Wrapper,
  Content,
  Logo,
  Text,
  NavButton,
  InnerContent,
  LogoContent,
} from "./Header.styles";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../contexts/GlobalContext";

const Header = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  let name =
    currentUser &&
    currentUser.email.substring(0, currentUser.email.lastIndexOf("@"));

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }
  return (
    <Wrapper>
      <Content>
        <LogoContent className="LogoContent">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex" }}>
              <Logo src={NBlogo} alt="app-logo" />
              <Text>
                <h1>MovieSpot</h1>
              </Text>
            </div>
          </Link>
        </LogoContent>
        <InnerContent>
          {error && <NavButton>{error}</NavButton>}
          {currentUser && <NavButton>{name}</NavButton>}
          {currentUser && (
            <Link to="/watchlist" style={{ textDecoration: "none" }}>
              <NavButton> WatchList </NavButton>
            </Link>
          )}
          {currentUser && <NavButton onClick={handleLogout}>Log Out</NavButton>}

          {!currentUser && (
            <Link
              to="/login"
              className=".Buttons"
              style={{ textDecoration: "none" }}
            >
              <NavButton> Log In </NavButton>
            </Link>
          )}
          {!currentUser && (
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <NavButton> Sign up </NavButton>
            </Link>
          )}
        </InnerContent>
      </Content>
    </Wrapper>
  );
};
export default Header;
