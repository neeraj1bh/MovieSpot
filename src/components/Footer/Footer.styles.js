import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 20px;
  align-items: center;
  margin: 20px 0 0 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    display: block;
    align-items: center;
    margin: auto;
  }
`;

export const Content1 = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo1 = styled.img`
  width: 70px;
  animation: spin 5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Logo2 = styled.img`
  width: 70px;
  margin: 0 20px;
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
