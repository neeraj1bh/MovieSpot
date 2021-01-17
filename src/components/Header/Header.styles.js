import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  align-items: center;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 70px;
  animation: spin 5s linear infinite;

  :hover {
    animation: spin .5s linear infinite;
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
