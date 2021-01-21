import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  align-items: center;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  flex: 3;
  /* justify-content: space-around; */
  align-items: center;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1050px) {
    padding: 1rem;
    justify-content: space-around;
  }
  @media screen and (max-width: 550px) {
    padding: 1rem;
    width: 70%;
    margin: auto;
    justify-content: space-around;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 70px;
  animation: spin 5s linear infinite;

  :hover {
    animation: spin 0.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Text = styled.div`
  color: var(--white);

  h1 {
    font-size: var(--fontBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
`;

export const NavButton = styled.div`
  font-size: 0.7rem;
  padding: 0.5rem 1rem;
  background: var(--white);
  color: var(--black);
  border-color: var(--white);
  letter-spacing: 3px;
  cursor: pointer;
  font-weight: 900;
  text-transform: uppercase;
  outline: none;
  transition: all 0.7s ease;
  border-radius: 5px;
  /* all: none; */
  /* text-decoration-color : inherit; */
  /* Link {
    all: none;
    text-decoration-color: inherit;
    text-decoration: unset;
  } */

  :hover {
    background: var(--black);
    color: var(--white);
    border-color: var(--white);
  }

  @media screen and (max-width: 550px) {
    margin: 0.5rem;
    width: 100%;
    text-align: center;
  }
`;
