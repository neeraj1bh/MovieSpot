import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGrey);
    font-size: var(--fontBig);
    @media screen and (max-width: 768px) {
      font-size: var(--fontMed);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 3rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 2rem;
  }
`;
